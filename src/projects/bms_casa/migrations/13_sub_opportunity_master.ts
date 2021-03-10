import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "sub_opportunity_master",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        subProjectName: {
                            type: DataTypes.STRING(45),
                            allowNull: false,
                        },
                        projectId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "project_master",
                                key: "id",
                            },
                        },
                        constructionCompanyId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "construction_company_master",
                                key: "id",
                            },
                        },
                        projectManagerId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "project_manager_master",
                                key: "id",
                            },
                        },
                        salesPersonId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "user_master",
                                key: "id",
                            },
                        },
                        note: {
                            type: DataTypes.STRING(200),
                            allowNull: true,
                        },
                        amount: {
                            type: DataTypes.DOUBLE,
                            allowNull: false,
                        },
                        status: {
                            type: DataTypes.STRING(45),
                            allowNull: false,
                        },
                        submittedDate: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        startDate: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        bidDueDate: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        endDate: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        createdOn: {
                            type: DataTypes.DATE,
                        },
                        modifiedOn: {
                            type: DataTypes.DATE,
                        },
                    },
                    { transaction: t }
                ),
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
            await query.dropTable("sub_opportunity_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
