import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "permission_master",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        name: {
                            type: DataTypes.STRING(40),
                            allowNull: false,
                        },
                        description: {
                            type: DataTypes.STRING(1000),
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
                            allowNull: true,
                            defaultValue: true,
                        },
                        groupIsActive: {
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
            await query.dropTable("permission_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
