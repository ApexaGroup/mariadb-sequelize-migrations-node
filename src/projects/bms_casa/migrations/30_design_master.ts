import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "design_master",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        mixDesignName: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        mixDesignCode: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        wcRatio: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        documentPath: {
                            type: DataTypes.STRING(500),
                            allowNull: true,
                        },
                        minRate: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        pumpMixtestingLabName: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        plantCodeid: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "company_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        strengthCategoryid: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "strength_category",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        expirationDate: {
                            type: DataTypes.DATE,
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

            await query.dropTable("design_master", {
                transaction: t,
            })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
