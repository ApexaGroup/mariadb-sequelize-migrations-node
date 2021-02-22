import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable("quote_short_load_charge", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                quoteTransactionId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "quote_trans_master",
                        key: "id",
                    },
                    allowNull: false,
                },
                title: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                quoteNote: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                fieldDescription: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                createdOn: {
                    type: DataTypes.DATE,
                },
                modifiedOn: {
                    type: DataTypes.DATE,
                },
            })
        } catch (error) {
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        await query.dropTable("quote_short_load_charge")
    },
}
