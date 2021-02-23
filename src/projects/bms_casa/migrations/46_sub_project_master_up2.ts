import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
                await query.addColumn(
                    { tableName: "sub_project_master" },
                    "bidDueDate",
                    {
                        type: DataTypes.DATE,
                        allowNull: false,
                    }
                )
        } catch (error) {
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        await query.removeColumn(
            { tableName: "sub_project_master" },
            "bidDueDate"
        )
    },
}
