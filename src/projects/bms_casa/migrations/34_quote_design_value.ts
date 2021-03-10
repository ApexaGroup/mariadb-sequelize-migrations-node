import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "quote_design_value",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        quoteDesignDetailsId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "quote_design_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        proportions: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        unit: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        estYards: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        conMix: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        pumpMix: {
                            type: DataTypes.STRING(100),
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

            await query.dropTable("quote_design_value", {
                transaction: t,
            })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
