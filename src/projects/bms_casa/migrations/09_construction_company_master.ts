import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "construction_company_master",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                        },
                        companyName: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        // plantId: {
                        //     type: DataTypes.INTEGER,
                        //     references: {
                        //         model: "company_master",
                        //         key: "id",
                        //     },
                        // },
                        // creditLimit: {
                        //     type: DataTypes.STRING(100),
                        //     allowNull: true,
                        // },
                        description: {
                            type: DataTypes.STRING(1000),
                            allowNull: true,
                        },
                        contactEmailId: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        contactPersonName: {
                            type: DataTypes.STRING(45),
                            allowNull: true,
                        },
                        contactNo: {
                            type: DataTypes.STRING(45),
                            allowNull: true,
                        },
                        alternateNo: {
                            type: DataTypes.STRING(45),
                            allowNull: true,
                        },
                        address: {
                            type: DataTypes.STRING(1000),
                            allowNull: true,
                        },
                        state: {
                            type: DataTypes.STRING(30),
                            allowNull: true,
                        },
                        city: {
                            type: DataTypes.STRING(30),
                            allowNull: true,
                        },
                        zipCode: {
                            type: DataTypes.STRING(15),
                            allowNull: true,
                        },
                        // creditApplication: {
                        //     type: DataTypes.BOOLEAN,
                        //     allowNull: true,
                        //     defaultValue: false,
                        // },
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
            await query.dropTable("construction_company_master", {
                transaction: t,
            })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
