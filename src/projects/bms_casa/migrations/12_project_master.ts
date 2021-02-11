import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable("project_master", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                projectName: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
                companyId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "company_master",
                        key: "id",
                    },
                },
                salesPersonId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "user_master",
                        key: "id",
                    },
                },
                constructionCompanyId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "construction_company_master",
                        key: "id",
                    },
                },
                projectManagerId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "project_manager_master",
                        key: "id",
                    },
                },
                salesPersonName: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
                note: {
                    type: DataTypes.STRING(200),
                    allowNull: true,
                },
                amount: {
                    type: DataTypes.DOUBLE,
                    allowNull: false,
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
        await query.dropTable("project_master")
    },
}
