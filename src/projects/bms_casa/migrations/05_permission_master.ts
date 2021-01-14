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
            displayName: {
                type: DataTypes.STRING(40),
                allowNull: false,
            },
            group: {
                type: DataTypes.STRING(30),
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
    },
    down: async (query: QueryInterface) => {
        await query.dropTable("permission_master")
    },
}
