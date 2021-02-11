import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable("lost_sub_project_master", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                subProjectId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "sub_project_master",
                        key: "id",
                    },
                    allowNull: true,
                },
                awardedCompanyName: {
                    type: DataTypes.STRING(50),
                    allowNull: true,
                },
                reason: {
                    type: DataTypes.STRING(200),
                    allowNull: true,
                },
                amount: {
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
        await query.dropTable("lost_sub_project_master")
    },
}
