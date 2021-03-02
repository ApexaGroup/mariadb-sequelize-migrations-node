import { QueryInterface, DataTypes } from "sequelize"
// local imports
import * as helper from "../helper"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t)
            // Create customer master table
            await query.createTable(
                "customer_master",
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                    },
                    fullName: {
                        type: DataTypes.STRING(200),
                        allowNull: false,
                    },
                    companyName: {
                        type: DataTypes.STRING(100),
                        allowNull: true,
                    },
                    birthDate: {
                        type: DataTypes.DATEONLY,
                        allowNull: true,
                    },
                    gender: {
                        type: DataTypes.ENUM,
                        values: helper.getGender(),
                        allowNull: true,
                    },
                    state: {
                        type: DataTypes.STRING(45),
                        allowNull: true,
                    },
                    country: {
                        type: DataTypes.STRING(45),
                        allowNull: true,
                    },
                    profileImage: {
                        type: DataTypes.STRING(500),
                        allowNull: true,
                    },
                    isActive: {
                        type: DataTypes.BOOLEAN,
                        allowNull: false,
                        defaultValue: true,
                    },
                    createdOn: {
                        type: DataTypes.DATE,
                    },
                    modifiedOn: {
                        type: DataTypes.DATE,
                    },
                    created_by: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: "user_login",
                            key: "id",
                        },
                    },
                    modified_by: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: "user_login",
                            key: "id",
                        },
                    },
                },
                { transaction: t }
            )
            // Create customer login table
            await query.createTable(
                "customer_login",
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                    },
                    email: {
                        type: DataTypes.STRING(80),
                        allowNull: false,
                        unique: true,
                    },
                    passwordHash: {
                        type: DataTypes.STRING(200),
                        allowNull: false,
                    },
                    customerId: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        references: {
                            model: "customer_master",
                            key: "id",
                        },
                    },
                    resetToken: {
                        type: DataTypes.STRING(500),
                        allowNull: true,
                    },
                    resetExpires: {
                        type: DataTypes.DATE,
                        allowNull: true,
                        defaultValue: helper.getExpiryTime,
                    },
                    status: {
                        type: DataTypes.ENUM,
                        values: ["pending", "verified"],
                        defaultValue: "pending",
                        allowNull: true,
                    },
                    newEmail: {
                        type: DataTypes.STRING(80),
                        allowNull: true,
                    },
                    newEmailToken: {
                        type: DataTypes.STRING(500),
                        allowNull: true,
                    },
                    createdOn: {
                        type: DataTypes.DATE,
                    },
                    modifiedOn: {
                        type: DataTypes.DATE,
                    },
                    created_by: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: "user_login",
                            key: "id",
                        },
                    },
                    modified_by: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: "user_login",
                            key: "id",
                        },
                    },
                },
                { transaction: t }
            )
            // Create customer subscription table
            await query.createTable(
                "customer_subscription",
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                    },
                    customerId: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        references: {
                            model: "customer_master",
                            key: "id",
                        },
                    },
                    startDate: {
                        type: DataTypes.DATEONLY,
                        allowNull: false,
                    },
                    expiryDate: {
                        type: DataTypes.DATEONLY,
                        allowNull: false,
                    },
                    planName: {
                        type: DataTypes.STRING(40),
                        allowNull: false,
                    },
                    allocatedData: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        defaultValue: 10,
                    },
                    usedData: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        defaultValue: 0,
                    },
                    status: {
                        type: DataTypes.STRING(20),
                        allowNull: false,
                    },
                    comment: {
                        type: DataTypes.STRING(200),
                        allowNull: true,
                    },
                    createdOn: {
                        type: DataTypes.DATE,
                    },
                    modifiedOn: {
                        type: DataTypes.DATE,
                    },
                    created_by: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: "user_login",
                            key: "id",
                        },
                    },
                    modified_by: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: "user_login",
                            key: "id",
                        },
                    },
                },
                { transaction: t }
            )
            // Create customer token table
            await query.createTable(
                "customer_token",
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                    },
                    token: {
                        type: DataTypes.STRING(500),
                        allowNull: false,
                    },
                    customerId: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        references: {
                            model: "customer_master",
                            key: "id",
                        },
                    },
                    createdOn: {
                        type: DataTypes.DATE,
                    },
                    modifiedOn: {
                        type: DataTypes.DATE,
                    },
                    created_by: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: "user_login",
                            key: "id",
                        },
                    },
                    modified_by: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                        references: {
                            model: "user_login",
                            key: "id",
                        },
                    },
                },
                { transaction: t }
            )
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
            // Delete customer token table
            await query.dropTable("customer_token", { transaction: t })
            // Delete customer subscription table
            await query.dropTable("customer_subscription", { transaction: t })
            // Delete customer login table
            await query.dropTable("customer_login", { transaction: t })
            // Delete customer master table
            await query.dropTable("customer_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
