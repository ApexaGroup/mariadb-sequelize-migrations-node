import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t)
            // Create skill master table
            await query.createTable("skill_set_master", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                title: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                    unique: true,
                },
                description: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                isActive: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: true,
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
            // Delete skill master table
            await query.dropTable("skill_set_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
