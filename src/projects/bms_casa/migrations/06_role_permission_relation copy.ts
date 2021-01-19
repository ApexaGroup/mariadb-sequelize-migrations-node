import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable("role_permission_relation", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            roleId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "role_master",
                    key: "id",
                },
                allowNull: false,
            },
            permissionId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "permission_master",
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
        await query.dropTable("role_permission_relation")
    },
}
