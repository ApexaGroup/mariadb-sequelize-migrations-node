import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable("company_master", {
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
            emailId: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            contactPersonName: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            contactNo: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            alternateNo: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            gstNo: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            address: {
                type: DataTypes.STRING(200),
                allowNull: false,
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
            logo: {
                type: DataTypes.STRING(200),
                allowNull: true,
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: true,
            },
            createdOn: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            modifiedOn: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        })
    },
    down: async (query: QueryInterface) => {
        await query.dropTable("company_master")
    },
}
