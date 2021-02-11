import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable("followUp_sub_project", {
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
                contactPersonName: {
                    type: DataTypes.STRING(50),
                    allowNull: true,
                },
                contactNo: {
                    type: DataTypes.STRING(45),
                    allowNull: true,
                },
                description: {
                    type: DataTypes.STRING(200),
                    allowNull: true,
                },
                contactDate: {
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
        await query.dropTable("followUp_sub_project")
    },
}
