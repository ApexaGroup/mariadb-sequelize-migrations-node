import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "audit_log",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        userName: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        email: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        contactNumber: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        updatedFiled: {
                            type: DataTypes.STRING(1000),
                            allowNull: true,
                        },
                        operationName: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        sectionNameId: {
                            type: DataTypes.INTEGER,
                            allowNull: false,
                        },
                        sectionDataId: {
                            type: DataTypes.INTEGER,
                            allowNull: false,
                        },
                        createdOn: {
                            type: DataTypes.DATE,
                        },
                        modifiedOn: {
                            type: DataTypes.DATE,
                        },
                    },
                    { transaction: t }
                )
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

            await query.dropTable("audit_log", {
                transaction: t,
            })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}