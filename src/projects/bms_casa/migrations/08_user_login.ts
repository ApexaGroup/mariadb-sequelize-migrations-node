import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "user_login",
                    {
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
                            allowNull: true,
                        },
                        email: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                            unique: true,
                        },
                        passwordHash: {
                            type: DataTypes.STRING(200),
                            allowNull: false,
                        },
                        resetToken: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        resetExpired: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        createdOn: {
                            type: DataTypes.DATE,
                        },
                        modifiedOn: {
                            type: DataTypes.DATE,
                        },
                    },
                    { transaction: t }
                ),
                await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t)
            await query.dropTable("user_login", {
                transaction: t,
            })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
