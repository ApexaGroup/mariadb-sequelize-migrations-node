import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t)
            // Create company master table
            await query.createTable("company_master", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                companyName: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    unique: true,
                },
                description: {
                    type: DataTypes.STRING(200),
                    allowNull: true,
                },
                isActive: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: true,
                },
                industryId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "industry_type_master",
                        key: "id",
                    },
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
            // Delete company master table
            await query.dropTable("company_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
