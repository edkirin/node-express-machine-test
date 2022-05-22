import { DataTypes } from "sequelize";
import { connectDb } from "../database";

const sequelize = connectDb();

export const CompanyModel = sequelize.define(
    "company",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        caption: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "vending_companies",
        timestamps: false,
    }
);

export const MachineModel = sequelize.define(
    "machine",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        caption: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fiscalMachineId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "fiscal_machine_id",
        },
    },
    {
        tableName: "machines",
        timestamps: false,
    }
);

MachineModel.belongsTo(CompanyModel, {
    foreignKey: "owner_id",
});
