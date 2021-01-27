import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable("construction_company_master", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            companyName: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            contactEmailId: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            contactPersonName: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            contactNo: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            alternateNo: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            address: {
                type: DataTypes.STRING(200),
                allowNull: true,
            },
            state: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            city: {
                type: DataTypes.STRING(30),
                allowNull: true,
            },
            zipCode: {
                type: DataTypes.STRING(15),
                allowNull: true,
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: true,
            },
            createdOn: {
                type: DataTypes.DATE,
            },
            modifiedOn: {
                type: DataTypes.DATE,
            },
        })
    },
    down: async (query: QueryInterface) => {
        await query.dropTable("construction_company_master")
    },
}
