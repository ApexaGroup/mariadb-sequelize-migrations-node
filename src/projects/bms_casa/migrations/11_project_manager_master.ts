import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable("project_manager_master", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                fullName: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
                contactNo: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
                alternateNo: {
                    type: DataTypes.STRING(45),
                    allowNull: true,
                },
                contactEmail: {
                    type: DataTypes.STRING(60),
                    allowNull: false,
                },
                address: {
                    type: DataTypes.STRING(200),
                    allowNull: true,
                },
                city: {
                    type: DataTypes.STRING(45),
                    allowNull: true,
                },
                constructionCompanyId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "construction_company_master",
                        key: "id",
                    },
                },
                isActive: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: true,
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
        await query.dropTable("project_manager_master")
    },
}
