import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "premium_rates_master",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        title: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        truckHireFee: {
                            type: DataTypes.STRING(50),
                            allowNull: false,
                        },
                        plantOpeningFee: {
                            type: DataTypes.STRING(50),
                            allowNull: false,
                        },
                        quoteNote: {
                            type: DataTypes.STRING(1000),
                            allowNull: true,
                        },
                        fieldDescription: {
                            type: DataTypes.STRING(1000),
                            allowNull: true,
                        },
                        plantId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "company_master",
                                key: "id",
                            },
                            allowNull: false,
                        },     
                        isActive: {
                            type: DataTypes.BOOLEAN,
                            defaultValue: true,
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

            await query.dropTable("premium_rates_master", {
                transaction: t,
            })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
