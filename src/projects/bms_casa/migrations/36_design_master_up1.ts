import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
            await query.addColumn("design_master","psi",{
                type : DataTypes.STRING(100),
                allowNull : true
            }),
            await query.addColumn("design_master","mixType",{
                type : DataTypes.STRING(100),
                allowNull : true
            }),
            await query.addColumn("design_master","stoneType",{
                type : DataTypes.STRING(100),
                allowNull : true
            }),
            await query.addColumn("design_master","airType",{
                type : DataTypes.STRING(100),
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
            await query.removeColumn("design_master", "psi")
            await query.removeColumn("design_master", "mixType")
            await query.removeColumn("design_master", "stoneType")
            await query.removeColumn("design_master", "airType")
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
