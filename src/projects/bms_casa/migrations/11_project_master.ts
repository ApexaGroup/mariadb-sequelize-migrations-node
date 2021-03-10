import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "project_master",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        projectName: {
                            type: DataTypes.STRING(45),
                            allowNull: false,
                        },
                        companyId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "company_master",
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
                        projectMasalesPersonNamenagerId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "project_manager_master",
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
                        isActive: {
                            type: DataTypes.BOOLEAN,
                            allowNull: true,
                            defaultValue: true,
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
            await query.dropTable("project_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
