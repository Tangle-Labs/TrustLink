import { PUBLIC_TWITTER_CLIENT_ID, PUBLIC_URI } from "$env/static/public";
import { auth, Client } from "twitter-api-sdk";

export const twitterAuthClient = new auth.OAuth2User({
    client_id: PUBLIC_TWITTER_CLIENT_ID,
    callback: new URL("/verify/twitter", PUBLIC_URI).toString(),
    scopes: ["tweet.read", "users.read"],
});

export const twitterClient = new Client(twitterAuthClient);
