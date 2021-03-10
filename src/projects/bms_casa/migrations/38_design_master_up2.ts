import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
            await query.addColumn("design_master","Proportions",{
                type : DataTypes.STRING(100),
                allowNull : true
            }),
               
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
            await query.removeColumn("design_master", "Proportions")
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
