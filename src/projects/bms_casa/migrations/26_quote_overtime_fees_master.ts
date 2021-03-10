import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "quote_overtime_fees_master",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        quoteTransactionId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "quote_trans_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        title: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        price: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        unit: {
                            type: DataTypes.STRING(25),
                            allowNull: false,
                        },
                        quoteNote: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        fieldDescription: {
                            type: DataTypes.STRING(100),
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

            await query.dropTable("quote_overtime_fees_master", {
                transaction: t,
            })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
