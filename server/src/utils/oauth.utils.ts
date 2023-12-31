import { nanoid } from "nanoid";
import { PUBLIC_TWITTER_CLIENT_ID, PUBLIC_URI } from "../config/env.config";
import { auth, Client } from "twitter-api-sdk";
export type Platforms = "X" | "Google" | "Linkedin";

export const twitterAuthClient = new auth.OAuth2User({
    client_id: PUBLIC_TWITTER_CLIENT_ID,
    callback: new URL("/verify/twitter", PUBLIC_URI).toString(),
    scopes: ["tweet.read", "users.read"],
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

export async function getUserNameFromToken(token: string, platform: Platforms) {
    switch (platform) {
        case "X":
            return getTwitterUserName(token);
    }
}

export async function getOauthUrl(platform: Platforms) {
    switch (platform) {
        case "X":
            return twitterAuthClient.generateAuthURL({
                state: nanoid(),
                code_challenge_method: "s256",
            });
    }
}
