import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.addColumn(
                    "quality_control",
                    "subProjectId",
                    {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                    },
                    { transaction: t }
                ),
                await query.addIndex("quality_control", ["subProjectId"], {
                    name: "subProjectId",
                }),
                await query.addConstraint("quality_control", {
                    type: "foreign key",
                    fields: ["subProjectId"],
                    name: "quality_control_fk_subProjectId",
                    references: {
                        table: "sub_project_master",
                        field: "id",
                    },
                    onDelete: "cascade",
                    onUpdate: "cascade",
                })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t)
            // Delete industry master table
            await query.removeColumn("quality_control", "subProjectId", {
                transaction: t,
            }),
                await query.removeConstraint(
                    "quality_control",
                    "quality_control_fk_subProjectId"
                )
            await query.removeIndex("quality_control", "subProjectId")
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
