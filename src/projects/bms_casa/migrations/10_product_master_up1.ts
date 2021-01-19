import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.changeColumn(
            { tableName: "product_master" },
            "productPrice",
            {
                type: DataTypes.DOUBLE,
            }
        )
    },
    down: async (query: QueryInterface) => {
        await query.changeColumn(
            { tableName: "product_master" },
            "productPrice",
            {
                type: DataTypes.INTEGER,
            }
        )
    },
}
