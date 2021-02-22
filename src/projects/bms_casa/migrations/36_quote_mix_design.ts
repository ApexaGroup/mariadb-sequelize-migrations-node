import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable("quote_mix_design_details", {
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
                mdStrength: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                documentPath: {
                    type: DataTypes.STRING(200),
                    allowNull: true,
                },
                proportions: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                unit: {
                    type: DataTypes.STRING(25),
                    allowNull: false,
                },
                estYards: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                conMix: {
                    type: DataTypes.DOUBLE,
                    allowNull: false,
                },
                pumpMix: {
                    type: DataTypes.DOUBLE,
                    allowNull: false,
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
        await query.dropTable("quote_mix_design_details")
    },
}
