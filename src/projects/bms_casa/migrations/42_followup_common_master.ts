import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t),
                await query.createTable(
                    "followup_common_master",
                    {
                        id: {
                            type: DataTypes.INTEGER,
                            primaryKey: true,
                            autoIncrement: true,
                            allowNull: false,
                        },
                        contactDate: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        contactPersonName: {
                            type: DataTypes.STRING(150),
                            allowNull: true,
                        },
                        contactNo: {
                            type: DataTypes.STRING(50),
                            allowNull: true,
                        },
                        description: {
                            type: DataTypes.STRING(1000),
                            allowNull: true,
                        },
                        typeOfContact: {
                            type: DataTypes.STRING(100),
                            allowNull: false,
                        },
                        email: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        onsiteVisit: {
                            type: DataTypes.STRING(100),
                            allowNull: true,
                        },
                        nextMeetingDate: {
                            type: DataTypes.DATE,
                            allowNull: true,
                        },
                        opportunityId: {
                            type: DataTypes.INTEGER,
                            references: {
                                model: "sub_opportunity_master",
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
            await query.dropTable("followup_common_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
