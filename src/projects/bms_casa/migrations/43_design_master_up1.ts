import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            query.renameColumn(
                { tableName: "design_master" },
                "mixDesgnName",
                "mixDesignName"
            ),
                query.addColumn(
                    { tableName: "design_master" },
                    "documentPath",
                    {
                        type: DataTypes.STRING(500),
                        allowNull: true,
                    }
                ),
                query.addColumn(
                    { tableName: "design_master" },
                    "expirationDate",
                    {
                        type: DataTypes.DATE,
                        allowNull: true,
                    }
                )
        } catch (error) {
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        query.renameColumn(
            { tableName: "design_master" },
            "mixDesignName",
            "mixDesgnName"
        ),
            query.removeColumn({ tableName: "design_master" }, "documentPath"),
            query.removeColumn({ tableName: "design_master" }, "expirationDate")
    },
}
