import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "quality_control",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        submittedDesign: {
                            type: DataTypes.STRING(200),
                            allowNull: false,
                        },
                        approveDesign: {
                            type: DataTypes.STRING(200),
                            allowNull: false,
                        },
                        TR2: {
                            type: DataTypes.STRING(200),
                            allowNull: false,
                        },
                        TR3: {
                            type: DataTypes.STRING(200),
                            allowNull: false,
                        },
                        designMasterId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "design_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        subOpportunityId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "sub_opportunity_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        createdOn: {
                            type: DataTypes.DATE,
                        },
                        modifiedOn: {
                            type: DataTypes.DATE,
                        },
                    },
                    { transaction: t }
                )
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
            await query.dropTable("quality_control", {
                transaction: t,
            })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
