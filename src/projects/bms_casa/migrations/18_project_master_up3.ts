import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        query.addColumn({ tableName: "project_master" }, "salesPersonId", {
            type: DataTypes.INTEGER,
            references: {
                model: "user_master",
                key: "id",
            },
        })
    },
    down: async (query: QueryInterface) => {
        query.removeColumn({ tableName: "project_master" }, "salesPersonId")
    },
}
