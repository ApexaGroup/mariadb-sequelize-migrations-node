import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.addColumn(
                "user_login",
                "resetToken",
                {
                    type: DataTypes.STRING(500),
                    allowNull: true,
                },
                { transaction: t }
            )
            await query.addColumn(
                "user_login",
                "resetExpires",
                {
                    type: DataTypes.DATE,
                    allowNull: true,
                },
                { transaction: t }
            )
            await query.commitTransaction(t)
        } catch (error) {
            query.rollbackTransaction(t)
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.removeColumn("user_login", "resetExpires", {
                transaction: t,
            })
            await query.removeColumn("user_login", "resetToken", {
                transaction: t,
            })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
