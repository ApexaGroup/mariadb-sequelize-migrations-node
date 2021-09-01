import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "quality_control_relation",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                            allowNull: false,
                        },
                        quoteId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "quote_trans_master",
                                key: "id",
                            },
                            allowNull: true,
                        },
                        designMasterId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "design_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        opportunityId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "sub_opportunity_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        qualityId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "quality_control",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        price: {
                            type: DataTypes.STRING(50),
                            allowNull: false,
                        },
                        estYards: {
                            type: DataTypes.STRING(50),
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
            // Delete industry master table
            await query.dropTable("quality_control_relation", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}