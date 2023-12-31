import {
    DataTypes,
    Model,
    Sequelize,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from "sequelize";

export class CredOffer extends Model<
    InferAttributes<CredOffer>,
    InferCreationAttributes<CredOffer>
> {
    declare id: string;
    declare offer: Record<string, any>;
    declare username: string;
    declare platform: "X" | "Linkedin" | "Google";
}

export const credOfferModel = (db: Sequelize) => {
    CredOffer.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                unique: true,
                allowNull: false,
            },
            offer: {
                type: DataTypes.JSONB,
                allowNull: false,
            },
            platform: {
                type: DataTypes.STRING,
            },
            username: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize: db,
            modelName: "CredOffer",
        }
    );

    return CredOffer;
};
