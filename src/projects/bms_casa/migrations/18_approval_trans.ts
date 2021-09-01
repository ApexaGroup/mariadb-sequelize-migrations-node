import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "approval_trans",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        approvalStatus: {
                            type: DataTypes.STRING(50),
                            allowNull: false,
                        },
                        approvalLevel: {
                            type: DataTypes.INTEGER,
                            allowNull: false,
                        },
                        userId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "user_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        quotationId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "quote_trans_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        notes:{
                            type: DataTypes.STRING(1000),
                            allowNull: true,
                        },
                        isEmailQuoteSend: {
                            type: DataTypes.BOOLEAN,
                            defaultValue: false,
                            allowNull: false,
                        },
                        isAddendumsQuoteSend:{
                            type: DataTypes.BOOLEAN,
                            defaultValue: false,
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
            await query.dropTable("approval_trans", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
