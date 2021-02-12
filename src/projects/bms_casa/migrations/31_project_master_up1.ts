import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.removeColumn({tableName : "project_master"},"salesPersonName")            
        } catch (error) {
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        await query.addColumn({ tableName: "project_master" }, "salesPersonName", {
            type: DataTypes.STRING,
            allowNull: false,
        })
    },
}
