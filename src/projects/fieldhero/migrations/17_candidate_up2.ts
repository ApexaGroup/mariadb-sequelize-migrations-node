import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.changeColumn(
            { tableName: "candidate_master" },
            "perm_address",
            {
                type: DataTypes.STRING(200),
                allowNull: true,
            }
        )
        await query.changeColumn(
            { tableName: "candidate_master" },
            "curr_address",
            {
                type: DataTypes.STRING(200),
                allowNull: true,
            }
        )
        await query.changeColumn({ tableName: "user_login" }, "email", {
            type: DataTypes.STRING(80),
            allowNull: false,
            unique: true,
        })
    },
    down: async (query: QueryInterface) => {
        await query.changeColumn(
            { tableName: "candidate_master" },
            "perm_address",
            {
                type: DataTypes.STRING(100),
                allowNull: true,
            }
        )
        await query.changeColumn(
            { tableName: "candidate_master" },
            "curr_address",
            {
                type: DataTypes.STRING(100),
                allowNull: true,
            }
        )
        await query.changeColumn({ tableName: "user_login" }, "email", {
            type: DataTypes.STRING(80),
            allowNull: false,
        })
    },
}
