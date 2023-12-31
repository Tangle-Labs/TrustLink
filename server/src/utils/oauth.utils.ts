import { nanoid } from "nanoid";
import {
    TWITTER_CLIENT_ID,
    PUBLIC_URI,
    LINKEDIN_CLIENT_ID,
    LINKEDIN_CLIENT_SECRET,
    PUBLIC_BASE_URI,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
} from "../config/env.config";
import { auth, Client } from "twitter-api-sdk";
import { AuthClient } from "linkedin-api-client";
import { OAuth2Client } from "google-auth-library";
import axios from "axios";

export type Platforms = "X" | "Google" | "Linkedin";

export const twitterAuthClient = new auth.OAuth2User({
    client_id: TWITTER_CLIENT_ID,
    callback: new URL("/verify/twitter", PUBLIC_URI).toString(),
    scopes: ["tweet.read", "users.read"],
});

export const oAuth2Client = new OAuth2Client(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    new URL("/verify/google", PUBLIC_URI).toString()
);

// Generate the url that will be used for the consent dialog.

export const linkedinAuthClient = new AuthClient({
    clientId: LINKEDIN_CLIENT_ID,
    clientSecret: LINKEDIN_CLIENT_SECRET,
    redirectUrl: new URL("/verify/linkedin", PUBLIC_URI).toString(),
});

export const twitterClient = new Client(twitterAuthClient);

async function getTwitterUserName(token: string) {
    await twitterAuthClient
        .requestAccessToken(token)
        .catch((e) => console.error(e));
    const user = await twitterClient.users.findMyUser({
        "user.fields": ["username"],
    });
    return "@" + user.data.username;
}

async function getLinkedinUserName(token: string) {
    const accessToken = await linkedinAuthClient.exchangeAuthCodeForAccessToken(
        token
    );
    console.log(accessToken.access_token);
    const { data } = await axios.get("https://api.linkedin.com/v2/userinfo", {
        headers: {
            Authorization: `Bearer ${accessToken.access_token}`,
        },
    });
    return data.name;
}

async function getGoogleUserName(token: string) {
    const { tokens } = await oAuth2Client.getToken(token);
    const { data } = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokens.access_token}`
    );
    return data.email;
}

export async function getUserNameFromToken(token: string, platform: Platforms) {
    switch (platform) {
        case "X":
            return getTwitterUserName(token);
        case "Linkedin":
            return getLinkedinUserName(token);
        case "Google":
            return getGoogleUserName(token);
    }
}

export async function getOauthUrl(platform: Platforms) {
    switch (platform) {
        case "X":
            return twitterAuthClient.generateAuthURL({
                state: nanoid(),
                code_challenge_method: "s256",
            });
        case "Linkedin":
            return linkedinAuthClient.generateMemberAuthorizationUrl([
                "openid",
                "profile",
                "email",
            ]);
        case "Google":
            return oAuth2Client.generateAuthUrl({
                access_type: "offline",
                scope: [
                    "https://www.googleapis.com/auth/userinfo.profile",
                    "https://www.googleapis.com/auth/userinfo.email",
                ],
            });
    }
}
