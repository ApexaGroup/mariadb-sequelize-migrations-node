import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.addColumn(
                    "quote_trans_master",
                    "quotationCode",
                    {
                        type: DataTypes.STRING(100),
                        allowNull: true,
                    },
                    { transaction: t }
                ),
                await query.addColumn(
                    "quote_trans_master",
                    "quotationDate",
                    {
                        type: DataTypes.DATE,
                        allowNull: true,
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
            await query.removeColumn("quote_trans_master", "quotationCode", {
                transaction: t,
            }),
            await query.removeColumn("quote_trans_master", "quotationDate", {
                transaction: t,
            })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
