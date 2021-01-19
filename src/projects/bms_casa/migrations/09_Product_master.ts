import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable("product_master", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            productName: {
                type: DataTypes.STRING(40),
                allowNull: false,
            },
            productPrice: {
                type: DataTypes.NUMBER,
                allowNull: false,
            },
            productCode: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            companyId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "company_master",
                    key: "id",
                },
                allowNull: false,
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
        await query.dropTable("product_master")
    },
}
