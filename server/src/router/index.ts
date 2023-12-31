import {
    credentialsEndpoint,
    generateOauthUrl,
    getCredOffer,
    sendDidJson,
    sendMetadata,
    sendOauthMetadata,
    tokenEndpoint,
    verifyTokenAndCreateOffer,
} from "@/controllers/openid";
import { Router } from "express";

const router = Router();

router.route("/api/verify").post(verifyTokenAndCreateOffer);
router.route("/api/oauth-url/:platform").get(generateOauthUrl);
router.route("/.well-known/openid-credential-issuer").get(sendMetadata);
router.route("/.well-known/did.json").get(sendDidJson);
router.route("/.well-known/oauth-authorization-server").get(sendOauthMetadata);
router.route("/api/token");
router.route("/api/credential").post(credentialsEndpoint);
router.route("/api/token").post(tokenEndpoint);
router.route("/api/offers/:id").get(getCredOffer);

export default router;
