import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t)
            // Create agent master table
            await query.createTable(
                "agent_master",
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                    },
                    user_id: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        references: {
                            model: "user_master",
                            key: "id",
                        },
                    },
                    prof_status: {
                        type: DataTypes.STRING(40),
                        allowNull: true,
                    },
                    gstin: {
                        type: DataTypes.STRING(20),
                        allowNull: true,
                        unique: true,
                    },
                    company_name: {
                        type: DataTypes.STRING(100),
                        allowNull: true,
                    },
                    note: {
                        type: DataTypes.STRING(500),
                        allowNull: true,
                    },
                    status: {
                        type: DataTypes.ENUM,
                        values: ["pending", "registered"],
                        allowNull: false,
                    },
                    approved_on: {
                        type: DataTypes.DATE,
                        allowNull: true,
                    },
                    approved_by: {
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
            // Delete agent master table
            await query.dropTable("agent_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
