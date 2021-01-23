import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.addColumn(
            { tableName: "user_master" },
            "userProfileImage",
            {
                type: DataTypes.STRING,
                allowNull: true,
            }
        )
    },
    down: async (query: QueryInterface) => {
        await query.removeColumn(
            { tableName: "user_master" },
            "userProfileImage"
        )
    },
}
