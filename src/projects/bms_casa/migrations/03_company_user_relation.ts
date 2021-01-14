import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable("company_user_relation", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            companyId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "company_master",
                    key: "id",
                },
                allowNull: false,
            },
            userMasterId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "user_master",
                    key: "id",
                },
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
        await query.dropTable("company_user_relation")
    },
}
