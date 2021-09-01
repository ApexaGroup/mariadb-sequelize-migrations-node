import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "construction_credit_history",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        creditLimit: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        isApplication: {
                            type: DataTypes.BOOLEAN,
                            allowNull: true,
                        },
                        noLimit: {
                            type: DataTypes.BOOLEAN,
                            allowNull: true,
                        },
                        Limit: {
                            type: DataTypes.BOOLEAN,
                            allowNull: true,
                        },
                        creditTerms: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        needCreditApplication: {
                            type: DataTypes.BOOLEAN,
                            allowNull: true,
                        },
                        codAccount: {
                            type: DataTypes.BOOLEAN,
                            allowNull: true,
                        },
                        constructionCompanyId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "construction_company_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        companyID: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "company_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        submittedDate: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        approveDate: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        tr2Date: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        tr3Date: {
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

            await query.dropTable("construction_credit_history", {
                transaction: t,
            })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}