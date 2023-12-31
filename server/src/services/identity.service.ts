import {
    CreateBadgeProps,
    GenericStore,
    IdentityAccount,
    IdentityManager,
    encryptWithAES,
} from "@tanglelabs/ssimon";
import { DidWebAccount, DidWebAdapter } from "@tanglelabs/web-identity-adapter";
import { fileURLToPath } from "url";
import path from "path";
import { promises } from "fs";
import { IDENTITY_PATH, IDENTITY_SECRET } from "../config/env.config";
import { nanoid } from "nanoid";

const { readFile, writeFile } = promises;

const constructFileStore = ({
    path,
    password,
}: {
    path: string;
    password: string;
}) => {
    const writer = async (body: string) => {
        await writeFile(path, body);
    };
    const reader = async () => {
        const data = await readFile(path).catch(async (e) => {
            if (e.code === "ENOENT") {
                const encryptedEmptyArray = encryptWithAES("[]", password);
                await writer(encryptedEmptyArray);
                return encryptedEmptyArray;
            }
            throw new Error();
        });

        return data.toString();
    };
    const store = new GenericStore({ path, password, reader, writer });

    return store;
};

export class IdentityService {
    private manager: IdentityManager<DidWebAccount>;
    private did: IdentityAccount;

    constructor() {
        this.build();
    }

    async build() {
        this.manager = await IdentityManager.build({
            adapter: DidWebAdapter,
            storage: constructFileStore({
                path: path.join(IDENTITY_PATH as string, "./manager"),
                password: IDENTITY_SECRET as string,
            }),
        });
        const store = constructFileStore({
            path: path.join(IDENTITY_PATH as string, "trustlink"),
            password: IDENTITY_SECRET as string,
        });
        try {
            this.did = await this.manager.createDid({
                alias: "trustlink.tanglelabs.io",
                store,
            });
        } catch {
            this.did = await this.manager.getDid({
                alias: "trustlink.tanglelabs.io",
                store,
            });
        }
    }

    async createCredential(props: {
        body: Record<string, any>;
        recipientDid: string;
        type: string;
    }) {
        const { body, recipientDid, type } = props;
        const cred = await this.did.credentials.create({
            body,
            recipientDid,
            id: `https://trustlink.tanglelabs.io/verify/${nanoid()}`,
            keyIndex: 0,
            type: [type],
        });
        return cred;
    }

    async createBadge(props: CreateBadgeProps) {
        const cred = await this.did.credentials.createBadge({
            ...props,
        });
        return cred;
    }
}

const identityService = new IdentityService();
identityService.build();

export { identityService };
