import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t)
            // Create subscription master table
            await query.createTable("subscription_master", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                planName: {
                    type: DataTypes.STRING(40),
                    allowNull: false,
                    unique: true,
                },
                dataCount: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
                durationMonths: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
                isActive: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: true,
                    allowNull: false,
                },
                price: {
                    type: DataTypes.DOUBLE,
                    allowNull: false,
                    defaultValue: 0,
                },
                note: {
                    type: DataTypes.STRING(200),
                    allowNull: true,
                },
                createdOn: {
                    type: DataTypes.DATE,
                },
                modifiedOn: {
                    type: DataTypes.DATE,
                },
                created_by: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: "user_login",
                        key: "id",
                    },
                },
                modified_by: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: "user_login",
                        key: "id",
                    },
                },
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
            // Delete subscription master table
            await query.dropTable("subscription_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
