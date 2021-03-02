import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t)
            // Create industry master table
            await query.createTable(
                "industry_type_master",
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                    },
                    title: {
                        type: DataTypes.STRING(80),
                        unique: true,
                        allowNull: false,
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
            // Delete industry master table
            await query.dropTable("industry_type_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
