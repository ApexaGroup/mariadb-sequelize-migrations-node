import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable(
            { tableName: "permission_master" },
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                name: {
                    type: DataTypes.STRING(40),
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING(200),
                    allowNull: true,
                },
                displayName: {
                    type: DataTypes.STRING(40),
                    allowNull: false,
                },
                group: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                },
                isActive: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: true,
                },
                createdOn: {
                    type: DataTypes.DATE,
                },
                modifiedOn: {
                    type: DataTypes.DATE,
                },
            }
        )
        await query.createTable(
            { tableName: "permission_dependency" },
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                permissionId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: "permission_master",
                        key: "id",
                    },
                },
                dependentPermissionId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: "permission_master",
                        key: "id",
                    },
                },
                createdOn: {
                    type: DataTypes.DATE,
                },
                modifiedOn: {
                    type: DataTypes.DATE,
                },
            }
        )
        await query.createTable(
            { tableName: "role_master" },
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                name: {
                    type: DataTypes.STRING(40),
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING(200),
                    allowNull: false,
                },
                isSystemGenerated: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                uuid: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4,
                },
                isActive: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: true,
                },
                createdOn: {
                    type: DataTypes.DATE,
                },
                modifiedOn: {
                    type: DataTypes.DATE,
                },
            }
        )
        await query.createTable(
            { tableName: "role_permission" },
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                roleId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: "role_master",
                        key: "id",
                    },
                },
                permissionId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: "permission_master",
                        key: "id",
                    },
                },
                createdOn: {
                    type: DataTypes.DATE,
                },
                modifiedOn: {
                    type: DataTypes.DATE,
                },
            }
        )
    },
    down: async (query: QueryInterface) => {
        await query.dropTable("role_permission")
        await query.dropTable("role_master")
        await query.dropTable("permission_dependency")
        await query.dropTable("permission_master")
    },
}
