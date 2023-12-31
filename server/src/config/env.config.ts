import { config } from "dotenv";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

config({ path: path.resolve(__dirname, "../../../.env") });

export const {
    PORT,
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USERNAME,
    IDENTITY_PATH,
    IDENTITY_SECRET,
    PUBLIC_URI,
    PUBLIC_BASE_URI,
    PRIVATE_KEY_HEX,
    ISSUER_DID,
    ISSUER_KID,
    TWITTER_CLIENT_ID,
    LINKEDIN_CLIENT_ID,
    LINKEDIN_CLIENT_SECRET,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
} = process.env;
