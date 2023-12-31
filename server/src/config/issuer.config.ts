import { IssuerStoreData, SimpleStore, VcIssuer } from "@tanglelabs/oid4vc";
import { resolver } from "./resolver.config";
import {
    PUBLIC_BASE_URI,
    PRIVATE_KEY_HEX,
    ISSUER_DID,
    ISSUER_KID,
    PUBLIC_URI,
} from "./env.config";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { promises } from "fs";

const { readFile, writeFile } = promises;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const file = path.resolve(__dirname, "./store.test-mock");

const reader = async () => {
    const raw = await readFile(file).catch((e) => {
        if (e.code === "ENOENT") writer([]);
        return Buffer.from(JSON.stringify([]));
    });
    return JSON.parse(raw.toString());
};

const writer = async (data: IssuerStoreData[]) => {
    await writeFile(file, JSON.stringify(data));
};

const rpKeys = {
    privKeyHex: PRIVATE_KEY_HEX,
    did: ISSUER_DID,
    kid: ISSUER_KID,
};

export const trustlinkIssuer = new VcIssuer({
    clientName: "TrustLink",
    logoUri: new URL("/imgs/tanglelabs.svg", PUBLIC_URI).toString(),
    credentialEndpoint: new URL("/api/credential", PUBLIC_BASE_URI).toString(),
    tokenEndpoint: new URL("/api/token", PUBLIC_BASE_URI).toString(),
    batchCredentialEndpoint: new URL(
        "/api/credentials",
        PUBLIC_BASE_URI
    ).toString(),
    credentialIssuer: new URL("/", PUBLIC_BASE_URI).toString(),
    cryptographicBindingMethodsSupported: ["did:key"],
    cryptographicSuitesSupported: ["EdDSA"],
    proofTypesSupported: ["jwt"],
    store: new SimpleStore({ reader, writer }),
    resolver,
    kid: rpKeys.kid,
    did: rpKeys.did,
    privKeyHex: rpKeys.privKeyHex,
});
