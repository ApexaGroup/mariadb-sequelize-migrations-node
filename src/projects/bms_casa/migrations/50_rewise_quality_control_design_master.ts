import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "rewise_quality_control_design_master",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        designMasterId:{
                            type: DataTypes.INTEGER,
                            allowNull: true,  
                        },
                        mixDesignName:{
                            type: DataTypes.STRING(100),
                            allowNull: true, 
                        },
                        mixDesignCode:{
                            type: DataTypes.STRING(500),
                            allowNull: true, 
                        },
                        wcRatio:{
                            type: DataTypes.STRING(100),
                            allowNull: true, 
                        },
                        documentPath:{
                            type: DataTypes.STRING(500),
                            allowNull: true, 
                        },
                        minRate:{
                            type: DataTypes.STRING(50),
                            allowNull: true, 
                        },
                        pumpMixtestingLabName:{
                            type: DataTypes.STRING(100),
                            allowNull: true, 
                        },
                        expirationDate:{
                            type: DataTypes.DATE,
                            allowNull:true
                        },
                        psi:{
                            type: DataTypes.STRING(100),
                            allowNull: true, 
                        },
                        mixType:{
                            type: DataTypes.STRING(100),
                            allowNull: true, 
                        },
                        airType:{
                            type: DataTypes.STRING(100),
                            allowNull: true, 
                        },
                        stoneType:{
                            type: DataTypes.STRING(100),
                            allowNull: true, 
                        },
                        proportions:{
                            type: DataTypes.STRING(100),
                            allowNull: true, 
                        },
                        unit:{
                            type: DataTypes.STRING(100),
                            allowNull: true, 
                        },
                        status:{
                            type: DataTypes.STRING(100),
                            allowNull: true, 
                        },
                        loadingPlant:{
                            type: DataTypes.INTEGER,
                            allowNull: true, 
                        },
                        plantId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "company_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        subOpporunityId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "sub_opportunity_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        checkDesignId:{
                            type: DataTypes.INTEGER,
                            allowNull: true,
                        },
                        approverDesign:{
                            type: DataTypes.STRING(500),
                            allowNull: true,
                        },
                        tr2:{
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        tr3:{
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        approvalDate:{
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        tr2Date:{
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        tr3Date:{
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        newPrice:{
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        newEstYards:{
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        quotationCode: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        quoteCount: {
                            type: DataTypes.INTEGER,
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
            await query.dropTable("rewise_quality_control_design_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
