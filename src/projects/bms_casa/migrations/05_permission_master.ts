import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable("permission_master", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(40),
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING(200),
                allowNull: true,
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: true,
            },
            createdOn: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            modifiedOn: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        })
    },
    down: async (query: QueryInterface) => {
        await query.dropTable("permission_master")
    },
}
