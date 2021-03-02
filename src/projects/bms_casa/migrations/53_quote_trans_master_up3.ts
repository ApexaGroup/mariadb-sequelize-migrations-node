import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            // to create foreign key, create index and then create constraint
            await query.addColumn("quote_trans_master", "salesPersonId", {
                type: DataTypes.INTEGER,
                allowNull: false,
            }),
                await query.addIndex("quote_trans_master", ["salesPersonId"], {
                    name: "salesPersonId",
                }),
                await query.addConstraint("quote_trans_master", {
                    type: "foreign key",
                    fields: ["salesPersonId"],
                    name: "quote_trans_master_fk_salesPersonId",
                    references: {
                        table: "user_master",
                        field: "id",
                    },
                    onDelete: "cascade",
                    onUpdate: "cascade",
                })
        } catch (error) {
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        await query.removeConstraint(
            "quote_trans_master",
            "quote_trans_master_fk_salesPersonId"
        ),
            await query.removeIndex("quote_trans_master", "salesPersonId")
        await query.changeColumn("quote_trans_master", "salesPersonId", {
            type: DataTypes.INTEGER,
            allowNull: true,
        })
    },
}
