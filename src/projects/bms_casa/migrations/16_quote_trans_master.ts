import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "quote_trans_master",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        constructionCompanyId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "construction_company_master",
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
                        subOpportunityId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "sub_opportunity_master",
                                key: "id",
                            },
                        },
                        // ownerId: {
                        //     type: DataTypes.INTEGER,
                        //     references: {
                        //         model: "company_master",
                        //         key: "id",
                        //     },
                        // },
                        quotationDocument: {
                            type: DataTypes.STRING(500),
                            allowNull: true,
                        },
                        t3Document: {
                            type: DataTypes.STRING(500),
                            allowNull: true,
                        },
                        note: {
                            type: DataTypes.STRING(1000),
                            allowNull: true,
                        },
                        bid: {
                            type: DataTypes.BOOLEAN,
                            allowNull: true,
                        },
                        awarded: {
                            type: DataTypes.BOOLEAN,
                            allowNull: true,
                        },
                        trRequired: {
                            type: DataTypes.BOOLEAN,
                            allowNull: true,
                        },

                        dueDate: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        quotationCode: {
                            type: DataTypes.STRING(300),
                            allowNull: true,
                        },
                        increaseDate: {
                            type: DataTypes.CHAR,
                            allowNull: true,
                        },
                        quotationDate: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        quoteId: {
                            type: DataTypes.INTEGER,
                            allowNull: true
                        },
                        submitDate: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        isEmailQuoteSend: {
                            type: DataTypes.BOOLEAN,
                            allowNull: true,
                        },
                        addendumsDocumentPath: {
                            type: DataTypes.STRING(500),
                            allowNull: true,
                        },
                        createdOn: {
                            type: DataTypes.DATE,
                        },
                        // increaseDate: {
                        //     type: DataTypes.DATE,
                        //     allowNull: true,
                        // },
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
            await query.dropTable("quote_trans_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
