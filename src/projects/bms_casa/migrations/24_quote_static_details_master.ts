import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable("quote_static_details_master", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            description: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            price: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            unitPrice: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            sectionName: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            defaultside: {
                type: DataTypes.STRING(25),
                allowNull: false,
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
        await query.dropTable("quote_static_details_master")
    },
}
