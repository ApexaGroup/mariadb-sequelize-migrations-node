import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "quality_control_design_master",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                            allowNull: false,
                        },
                        designMasterId: {
                            type: DataTypes.INTEGER,
                            allowNull: true
                        },
                        mixDesignName: {
                            type: DataTypes.STRING(50),
                            allowNull: false,
                        },
                        mixDesignCode: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        wcRatio: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        documentPath: {
                            type: DataTypes.STRING(500),
                            allowNull: true,
                        },
                        minRate: {
                            type: DataTypes.STRING(50),
                            allowNull: false,
                        },
                        pumpMixtestingLabName: {
                            type: DataTypes.STRING(50),
                            allowNull: false,
                        },
                        expirationDate: {
                            type: DataTypes.DATE,
                            allowNull: false,
                        },
                        unit: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        psi: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        mixType: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        stoneType: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        airType: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        proportions: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        status: {
                            type: DataTypes.STRING(50),
                            allowNull: false,
                        },
                        loadingPlant: {
                            type: DataTypes.INTEGER,
                            allowNull: false,
                        },
                        plantId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "company_master",
                                key: "id",
                            },
                            allowNull: true,
                        },
                        subOpporunityId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "sub_opportunity_master",
                                key: "id",
                            },
                            allowNull: true,
                        },
                        checkDesignId: {
                            type: DataTypes.BOOLEAN,
                            allowNull: false,
                        },
                        approverDesign: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        tr2: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        tr3: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        approvalDate: {
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
                        newPrice: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        newEstYards: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        IsEmailQuoteSend: {
                            type: DataTypes.BOOLEAN,
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
            await query.dropTable("quality_control_design_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}