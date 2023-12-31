import { trustlinkIssuer } from "@/config/issuer.config";
import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { CredOfferService } from "@/services";
import { resolver } from "@/config/resolver.config";
import * as didJWT from "did-jwt";
import { identityService } from "@/services/identity.service";
import { PUBLIC_BASE_URI, PUBLIC_URI } from "@/config/env.config";
import { nanoid } from "nanoid";
import {
    Platforms,
    getOauthUrl,
    getUserNameFromToken,
} from "@/utils/oauth.utils";
import { platform } from "os";

export const sendMetadata = expressAsyncHandler(
    async (req: Request, res: Response) => {
        console.log("metadata");
        const metadata = trustlinkIssuer.getIssuerMetadata();
        res.json(metadata);
    }
);

export const sendDidJson = expressAsyncHandler(
    async (req: Request, res: Response) => {
        const did = {
            "@context": ["https://www.w3.org/ns/did/v1"],
            id: "did:web:trustlink.tanglelabs.io",
            verificationMethod: [
                {
                    id: "did:web:trustlink.tanglelabs.io#key-0",
                    type: "Ed25519VerificationKey2018",
                    controller: "did:web:trustlink.tanglelabs.io",
                    publicKeyBase58:
                        "Gutj2n5iFua3NskntBPs3sJUHu5sdb4Nk82nn5ew3BMs",
                },
            ],
            authentication: ["did:web:trustlink.tanglelabs.io#key-0"],
            assertionMethod: ["did:web:trustlink.tanglelabs.io#key-0"],
            keyAgreement: ["did:web:trustlink.tanglelabs.io#key-0"],
        };

        res.json(did);
    }
);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const verifyTokenAndCreateOffer = expressAsyncHandler(
    async (req: Request, res: Response) => {
        const { platform, token } = req.body;
        const username = await getUserNameFromToken(token, platform);
        const id = nanoid();
        const offer = await trustlinkIssuer.createCredentialOffer(
            {
                requestBy: "reference",
                pinRequired: false,
                credentials: [
                    capitalizeFirstLetter(platform) + " Verification",
                ],
                credentialOfferUri: new URL(
                    `/api/offers/${id}`,
                    PUBLIC_BASE_URI
                ).toString(),
            },
            { offerId: id }
        );
        console.log(username);
        if (!username) throw new Error("500::Unable to authorize user");
        const credOffer = await CredOfferService.create({
            id,
            offer: offer.offer,
            platform: platform,
            username: username,
        });
        res.json({ uri: offer.uri });
    }
);

export const generateOauthUrl = expressAsyncHandler(
    async (req: Request, res: Response) => {
        const { platform } = req.params;
        const url = await getOauthUrl(platform as Platforms);
        res.json({ url });
    }
);

export const tokenEndpoint = expressAsyncHandler(
    async (req: Request, res: Response) => {
        console.log("poggers?");
        const response = await trustlinkIssuer.createTokenResponse(req.body);
        res.json(response);
    }
);

export const getCredOffer = expressAsyncHandler(
    async (req: Request, res: Response) => {
        const { offer } = await CredOfferService.findById(req.params.id);
        res.json(offer);
    }
);

export const sendOauthMetadata = expressAsyncHandler(
    async (req: Request, res: Response) => {
        const metadata = trustlinkIssuer.getOauthServerMetadata();
        res.json(metadata);
    }
);

export const credentialsEndpoint = expressAsyncHandler(
    async (req: Request, res: Response) => {
        const token = req.headers.authorization?.split("Bearer ")[1];
        if (!token) throw new Error("401::missing token");
        const { payload } = await didJWT.verifyJWT(token, {
            policies: { aud: false },
            resolver,
        });
        const did = await trustlinkIssuer.validateCredentialsResponse({
            token,
            proof: req.body.proof.jwt,
        });
        const offer = await CredOfferService.findById(payload.offerId);
        const cred = await identityService.createCredential({
            recipientDid: did,
            type: offer.platform + " Verification",
            body: {
                username: offer.username,
                enrichment: {
                    logo_uri: new URL(
                        "/imgs/tanglelabs.svg",
                        PUBLIC_URI
                    ).toString(),
                },
            },
        });

        const response = await trustlinkIssuer.createSendCredentialsResponse({
            credentials: [cred.cred],
        });
        res.json(response);
    }
);
