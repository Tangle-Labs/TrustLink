import { Sequelize } from "sequelize";
import {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_USERNAME,
} from "../config/env.config";
import { credOfferModel } from "./cred-offer.model";

const db = new Sequelize({
    dialect: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    logging: false,
});

export const CredOffer = credOfferModel(db);
export { db };
