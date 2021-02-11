import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable("quote_trans_master", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                constructionCompanyId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "construction_company_master",
                        key: "id",
                    },
                },
                subOpportunityId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "sub_opportunity_master",
                        key: "id",
                    },
                },
                ownerId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "company_master",
                        key: "id",
                    },
                },
                note: {
                    type: DataTypes.STRING(200),
                    allowNull: true,
                },
                bid: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                },
                awarded: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                },
                trRequired: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                },
                dueDate: {
                    type: DataTypes.DATE,
                    allowNull: true,
                },
                createdOn: {
                    type: DataTypes.DATE,
                },
                increaseDate: {
                    type: DataTypes.DATE,
                    allowNull: true,
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
        await query.dropTable("quote_trans_master")
    },
}
