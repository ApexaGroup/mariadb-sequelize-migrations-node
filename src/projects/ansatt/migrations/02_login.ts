import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable(
                { tableName: "user_login" },
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                    },
                    empId: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                    },
                    roleId: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        references: {
                            model: "role_master",
                            key: "id",
                        },
                    },
                    contactNo: {
                        type: DataTypes.STRING(20),
                        allowNull: false,
                        unique: true,
                    },
                    email: {
                        type: DataTypes.STRING(80),
                        allowNull: true,
                        unique: true,
                    },
                    passwordHash: {
                        type: DataTypes.STRING(200),
                        allowNull: true,
                    },
                    createdOn: {
                        type: DataTypes.DATE,
                    },
                    createdBy: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: "user_login",
                            key: "id",
                        },
                    },
                    modifiedOn: {
                        type: DataTypes.DATE,
                    },
                    modifiedBy: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: "user_login",
                            key: "id",
                        },
                    },
                }
            )
            await query.addColumn("role_master", "createdBy", {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: "user_login",
                    key: "id",
                },
            })
            await query.addColumn("role_master", "modifiedBy", {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: "user_login",
                    key: "id",
                },
            })
            await query.addColumn("role_permission", "createdBy", {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: "user_login",
                    key: "id",
                },
            })
            await query.addColumn("role_permission", "modifiedBy", {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: "user_login",
                    key: "id",
                },
            })
        } catch (error) {
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        await query.removeColumn("role_permission", "modifiedBy")
        await query.removeColumn("role_permission", "createdBy")
        await query.removeColumn("role_master", "modifiedBy")
        await query.removeColumn("role_master", "createdBy")
        await query.dropTable("user_login")
    },
}
