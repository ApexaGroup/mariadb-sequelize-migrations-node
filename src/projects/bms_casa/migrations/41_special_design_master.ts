import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "special_design_master",
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
                        Proportions: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        documentPath: {
                            type: DataTypes.STRING(500),
                            allowNull: false,
                        },
                        minRate: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        pumpMixtestingLabName:{
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
                        expirationDate:{
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        psi:{
                            type: DataTypes.STRING(100),
                            allowNull: true,  
                        },
                        mixType:{
                            type: DataTypes.STRING(100),
                            allowNull: true,  
                        },
                        stoneType:{
                            type: DataTypes.STRING(100),
                            allowNull: true,  
                        },
                        airType:{
                            type: DataTypes.STRING(100),
                            allowNull: true,  
                        },
                        loadingPlant:{
                            type: DataTypes.INTEGER,
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
            await query.dropTable("special_design_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
