import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {

            await query.createTable("quality_control", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                submittedDesign: {
                    type: DataTypes.STRING(200),
                    allowNull: false,
                },      
                approveDesign: {
                    type: DataTypes.STRING(200),
                    allowNull: false,
                },    
                TR2: {
                    type: DataTypes.STRING(200),
                    allowNull: false,
                },
                TR3: {
                    type: DataTypes.STRING(200),
                    allowNull: false,
                },
                designMasterId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "design_master",
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
        await query.dropTable("quality_control")
    },
}
