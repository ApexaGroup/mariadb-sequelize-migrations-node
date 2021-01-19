import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable("user_role_relation", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "user_master",
                    key: "id",
                },
                allowNull: false,
            },
            roleId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "role_master",
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
        await query.dropTable("user_role_relation")
    },
}
