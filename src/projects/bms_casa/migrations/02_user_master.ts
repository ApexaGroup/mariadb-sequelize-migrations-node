import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable("user_master", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                firstName: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
                lastName: {
                    type: DataTypes.STRING(45),
                    allowNull: true,
                },
                contactNo: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
                address: {
                    type: DataTypes.STRING(200),
                    allowNull: true,
                },
                alternateNo: {
                    type: DataTypes.STRING(45),
                    allowNull: true,
                },
                userProfileImage: {
                    type: DataTypes.STRING(500),
                    allowNull: true,
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
        await query.dropTable("user_master")
    },
}
