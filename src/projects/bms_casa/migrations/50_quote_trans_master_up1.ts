import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.addColumn(
                { tableName: "quote_trans_master" },
                "t3Document",
                {
                    type: DataTypes.STRING(500),
                    allowNull: false,
                }
            )
        } catch (error) {
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        await query.removeColumn(
            { tableName: "quote_trans_master" },
            "t3Document"
        )
    },
}
