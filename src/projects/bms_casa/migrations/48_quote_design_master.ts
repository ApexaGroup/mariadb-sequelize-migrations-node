import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {

            await query.createTable("quote_design_master", {
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
                mixDesignName: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },      
                mixDesignCode: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },    
                wcRatio: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                minRate: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                pumpMixtestingLabName: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                documentPath: {
                    type: DataTypes.STRING(500),
                    allowNull: false,
                },
                plantCodeid: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "company_master",
                        key: "id",
                    },
                    allowNull: false,
                },
                strengthCategoryid: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "strength_category",
                        key: "id",
                    },
                    allowNull: false,
                },
                expirationDate: {
                    type: DataTypes.DATE,
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
        await query.dropTable("quote_design_master")
    },
}
