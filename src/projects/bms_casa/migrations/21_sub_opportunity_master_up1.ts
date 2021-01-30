import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.addColumn({tableName : "sub_opportunity_master"}, "submittedDate", {
            type: DataTypes.DATE,
            allowNull: true,
        }),
        await query.addColumn({tableName : "sub_opportunity_master"}, "startDate", {
            type: DataTypes.DATE,
            allowNull: false,
        })
        await query.addColumn({tableName : "sub_opportunity_master"}, "endDate", {
            type: DataTypes.DATE,
            allowNull: false,
        })
    },
    down: async (query: QueryInterface) => {
        await query.removeColumn({tableName : "sub_opportunity_master"},"submittedDate"),
        await query.removeColumn({tableName : "sub_opportunity_master"},"startDate"),
        await query.removeColumn({tableName : "sub_opportunity_master"},"endDate")
    },
}
