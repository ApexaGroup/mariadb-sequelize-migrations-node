import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
               query.changeColumn("quality_control","submittedDesign",{
                type : DataTypes.STRING(200),   
                allowNull : true
               }),
               query.changeColumn("quality_control","approveDesign",{
                type : DataTypes.STRING(200),   
                allowNull : true
               }),
               query.changeColumn("quality_control","TR2",{
                type : DataTypes.STRING(200),   
                allowNull : true
               }),
               query.changeColumn("quality_control","TR3",{
                type : DataTypes.STRING(200),   
                allowNull : true
               })
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
            query.changeColumn("quality_control","submittedDesign",{
                type : DataTypes.STRING(200),   
                allowNull : false
               }),
               query.changeColumn("quality_control","approveDesign",{
                type : DataTypes.STRING(200),   
                allowNull : false
               }),
               query.changeColumn("quality_control","TR2",{
                type : DataTypes.STRING(200),   
                allowNull : false
               }),
               query.changeColumn("quality_control","TR3",{
                type : DataTypes.STRING(200),   
                allowNull : false
               })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
