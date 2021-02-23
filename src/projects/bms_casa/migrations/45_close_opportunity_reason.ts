import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {

            await query.createTable("close_opportunity_reasons", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                reasonForCloser: {
                    type: DataTypes.STRING(200),
                    allowNull: false,
                },      
                secondLowBidderName: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },    
                thirdLowBidderName: {
                    type: DataTypes.STRING(200),
                    allowNull: false,
                },
                createdBy: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "user_master",
                        key: "id",
                    },
                    allowNull: false,
                },
                subOpportunityId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "sub_opportunity_master",
                        key: "id",
                    },
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
        await query.dropTable("close_opportunity_reasons")
    },
}
