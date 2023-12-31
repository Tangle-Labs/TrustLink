import {
    Attributes,
    Identifier,
    InferAttributes,
    InferCreationAttributes,
    Model,
    ModelStatic,
    WhereOptions,
} from "sequelize";
import { MakeNullishOptional } from "sequelize/types/utils";

/**
 * Class to generate services UwU
 */
export class ModelService<
    T extends Model<InferAttributes<T>, InferCreationAttributes<T>>
> {
    model: ModelStatic<T>;
    context: string;

    /**
     * Create a new Model Service
     *
     * @param {ModelStatic<T>} model
     */
    constructor(model: ModelStatic<T>) {
        this.model = model;
        this.context = model.getTableName().toString();
    }

    /**
     * Create a new instance on the model table
     *
     * @param {MakeNullishOptional<T["_creationAttributes"]>} createOptions
     * @returns Promise<T>
     */
    async create(
        createOptions: MakeNullishOptional<T["_creationAttributes"]>
    ): Promise<T> {
        const entity = await this.model
            .create({ ...createOptions })
            .catch((e) => {
                throw new Error(`500::Unable to create ${this.context}`);
            });
        return entity;
    }

    /**
     * Find a singular entity which the matching where criteria
     *
     * @param {WhereOptions<Attributes<T>>} findOpts
     * @returns Promise<T>
     */
    async findOne(findOpts: WhereOptions<Attributes<T>>): Promise<T> {
        const entity = this.model
            .findOne({
                where: { ...findOpts },
            })
            .catch((e) => {
                throw new Error(`500::Unable to find ${this.context}`);
            });
        return entity;
    }

    /**
     * Find many entities on the table which the matching where criteria
     *
     * @param {WhereOptions<Attributes<T>>} findOpts
     * @returns Promise<T[]>
     */
    async findMany(findOpts: WhereOptions<Attributes<T>>): Promise<T[]> {
        const entities = this.model
            .findAll({
                where: { ...findOpts },
            })
            .catch((e) => {
                throw new Error(`500::Unable to find ${this.context}`);
            });
        return entities;
    }

    /**
     * Find a single entity by the ID (Primary Key)
     *
     * @param {Identifier} id
     * @returns Promise<T>
     */
    async findById(id: Identifier): Promise<T> {
        const entity = this.model.findByPk(id).catch((e) => {
            throw new Error(`500::Unable find ${this.context}`);
        });
        return entity;
    }

    /**
     * Find a single entity by the ID (Primary Key) and then update it with new
     * attributes supplied
     *
     * @param {Identifier} id
     * @returns Promise<T>
     */
    async findByIdAndUpdate(
        id: Identifier,
        updateParams: Attributes<T>
    ): Promise<T> {
        const entity = await this.model.findByPk(id).catch((e) => {
            throw new Error(`500::Unable to find ${this.context}`);
        });

        for (const key of Object.keys(updateParams)) {
            entity[key] = updateParams[key] ?? entity[key];
        }
        await entity.save().catch((e) => {
            throw new Error(
                `500::Unable to update ${this.model.getTableName()}`
            );
        });

        return entity;
    }

    /**
     * Find a single entity by the ID (Primary Key) and delete
     *
     * @param {Identifier} id
     * @returns Promise<T>
     */
    async findByIdAndDelete(id: Identifier): Promise<T> {
        const entity = await this.model.findByPk(id).catch((e) => {
            throw new Error(
                `500::Unable to delete ${this.model.getTableName()}`
            );
        });
        entity.destroy();
        return entity;
    }
}
