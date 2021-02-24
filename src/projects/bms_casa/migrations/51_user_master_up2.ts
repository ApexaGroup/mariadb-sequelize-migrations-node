import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.addColumn(
                { tableName: "user_master" },
                "defaultCompany",
                {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                }
            )
        } catch (error) {
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        await query.removeColumn(
            { tableName: "user_master" },
            "defaultCompany"
        )
    },
}
