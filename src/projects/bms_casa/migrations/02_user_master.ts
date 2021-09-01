import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()

        try {
            await query.startTransaction(t),
                await query.createTable(
                    "user_master",
                    {
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
                            type: DataTypes.STRING(1000),
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
                        uuid: {
                            type: DataTypes.STRING(500),
                            allowNull: false,
                        },
                        isActive: {
                            type: DataTypes.BOOLEAN,
                            allowNull: true,
                            defaultValue: true,
                        },
                        defaultCompanyId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "company_master",
                                key: "id",
                            },
                            allowNull: false,
                        },
                        state: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        city: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        zipCode: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        // companyId: {
                        //     type: DataTypes.INTEGER,
                        //     references: {
                        //         model: "company_master",
                        //         key: "id",
                        //     },
                        //     allowNull: false,
                        // },
                        createdOn: {
                            type: DataTypes.DATE,
                        },
                        modifiedOn: {
                            type: DataTypes.DATE,
                        },
                    },
                    { transaction: t }
                ),
                await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t)
            // Delete industry master table
            await query.dropTable("user_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
