import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable("premium_rates_master", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                title: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                truckHireFee: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                plantOpeningFee: {
                    type: DataTypes.STRING(50),
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
        await query.dropTable("premium_rates_master")
    },
}
