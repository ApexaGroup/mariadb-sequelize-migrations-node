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
                        address: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        crossStreet: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        borough: {
                            type: DataTypes.STRING(70),
                            allowNull: false,
                        },
                        state: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        zip: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
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
