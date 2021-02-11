import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable("approver_master", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                note: {
                    type: DataTypes.STRING(200),
                    allowNull: false,
                },
                quotationStatus: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
                userId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "user_master",
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
        await query.dropTable("approver_master")
    },
}
