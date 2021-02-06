import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.addColumn({ tableName: "user_master" }, "panCard", {
            type: DataTypes.STRING(20),
            allowNull: true,
        })
        await query.addColumn(
            { tableName: "role_master" },
            "isSystemGenerated",
            {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            }
        )
        await query.changeColumn(
            { tableName: "candidate_master" },
            "perm_address",
            {
                type: DataTypes.STRING(500),
                allowNull: true,
            }
        )
        await query.changeColumn(
            { tableName: "candidate_master" },
            "curr_address",
            {
                type: DataTypes.STRING(500),
                allowNull: true,
            }
        )
        await query.changeColumn({ tableName: "user_master" }, "address", {
            type: DataTypes.STRING(500),
            allowNull: true,
        })
        await query.changeColumn({ tableName: "user_login" }, "email", {
            type: DataTypes.STRING(80),
            allowNull: false,
            unique: true,
        })
        await query.changeColumn({ tableName: "customer_master" }, "gender", {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ["male", "female", "transgender"],
        })
    },
    down: async (query: QueryInterface) => {
        await query.removeColumn({ tableName: "user_master" }, "panCard")
        await query.removeColumn(
            { tableName: "role_master" },
            "isSystemGenerated"
        )
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
        await query.changeColumn({ tableName: "user_master" }, "address", {
            type: DataTypes.STRING(100),
            allowNull: true,
        })
        await query.changeColumn({ tableName: "user_login" }, "email", {
            type: DataTypes.STRING(80),
            allowNull: false,
        })
        await query.changeColumn({ tableName: "customer_master" }, "gender", {
            type: DataTypes.STRING(6),
            allowNull: true,
        })
    },
}
