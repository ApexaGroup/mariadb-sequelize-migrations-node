import { QueryInterface, DataTypes } from "sequelize"
// local imports
import * as helper from "../helper"
module.exports = {
    up: async (query: QueryInterface) => {
        const t = await query.sequelize.transaction()
        try {
            await query.startTransaction(t)
            // create candidate master table
            await query.createTable(
                "candidate_master",
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
                    birthDate: {
                        type: DataTypes.DATEONLY,
                        allowNull: true,
                    },
                    gender: {
                        type: DataTypes.ENUM,
                        values: helper.getGender(),
                        allowNull: true,
                    },
                    perm_address: {
                        type: DataTypes.STRING(500),
                        allowNull: true,
                    },
                    perm_city: {
                        type: DataTypes.STRING(45),
                        allowNull: true,
                    },
                    perm_state: {
                        type: DataTypes.STRING(45),
                        allowNull: true,
                    },
                    perm_country: {
                        type: DataTypes.STRING(45),
                        allowNull: true,
                    },
                    perm_zip: {
                        type: DataTypes.STRING(10),
                        allowNull: true,
                    },
                    curr_address: {
                        type: DataTypes.STRING(500),
                        allowNull: true,
                    },
                    curr_city: {
                        type: DataTypes.STRING(45),
                        allowNull: true,
                    },
                    curr_state: {
                        type: DataTypes.STRING(45),
                        allowNull: true,
                    },
                    curr_country: {
                        type: DataTypes.STRING(45),
                        allowNull: true,
                    },
                    curr_zip: {
                        type: DataTypes.STRING(10),
                        allowNull: true,
                    },
                    email1: {
                        type: DataTypes.STRING(80),
                        allowNull: true,
                        unique: true,
                    },
                    email2: {
                        type: DataTypes.STRING(80),
                        allowNull: true,
                    },
                    contactNo1: {
                        type: DataTypes.STRING(45),
                        allowNull: false,
                        unique: true,
                    },
                    contactNo2: {
                        type: DataTypes.STRING(45),
                        allowNull: true,
                    },
                    aadharNo: {
                        type: DataTypes.STRING(15),
                        allowNull: true,
                        unique: true,
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
                    approved_on: {
                        type: DataTypes.DATE,
                        allowNull: true,
                    },
                    approved_by: {
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
            // Create candidate training/certificate table
            await query.createTable(
                "candidate_training_cert",
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                    },
                    type: {
                        type: DataTypes.ENUM,
                        values: ["training", "certificate", "other"],
                        defaultValue: "other",
                        allowNull: false,
                    },
                    title: {
                        type: DataTypes.STRING(100),
                        allowNull: false,
                    },
                    issueDate: {
                        type: DataTypes.DATEONLY,
                        allowNull: true,
                    },
                    issuedBy: {
                        type: DataTypes.STRING(80),
                        allowNull: true,
                    },
                    description: {
                        type: DataTypes.STRING(200),
                        allowNull: true,
                    },
                    candidateId: {
                        type: DataTypes.INTEGER,
                        references: {
                            model: "candidate_master",
                            key: "id",
                        },
                        allowNull: false,
                    },
                    skillId: {
                        type: DataTypes.INTEGER,
                        references: {
                            model: "skill_set_master",
                            key: "id",
                        },
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
                {
                    transaction: t,
                }
            )
            // Create candidate work history table
            await query.createTable(
                "candidate_work_history",
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                    },
                    startDate: {
                        type: DataTypes.DATEONLY,
                        allowNull: true,
                    },
                    endDate: {
                        type: DataTypes.DATEONLY,
                        allowNull: true,
                    },
                    designation: {
                        type: DataTypes.STRING(60),
                        allowNull: true,
                    },
                    description: {
                        type: DataTypes.STRING(100),
                        allowNull: true,
                    },
                    candidateId: {
                        type: DataTypes.INTEGER,
                        references: {
                            model: "candidate_master",
                            key: "id",
                        },
                        allowNull: false,
                    },
                    companyId: {
                        type: DataTypes.INTEGER,
                        references: {
                            model: "company_master",
                            key: "id",
                        },
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
                {
                    transaction: t,
                }
            )
            await query.createTable(
                "skills_work_history",
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                    },
                    skillId: {
                        type: DataTypes.INTEGER,
                        references: {
                            model: "skill_set_master",
                            key: "id",
                        },
                        allowNull: false,
                    },
                    workHistoryId: {
                        type: DataTypes.INTEGER,
                        references: {
                            model: "candidate_work_history",
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
            // Create candidate other details table
            await query.createTable(
                "candidate_other_details",
                {
                    id: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true,
                        allowNull: false,
                    },
                    totalExpMonths: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                    },
                    totalExpYears: {
                        type: DataTypes.INTEGER,
                        allowNull: true,
                    },
                    registrationStatus: {
                        type: DataTypes.STRING(15),
                        allowNull: true,
                    },
                    candidateId: {
                        type: DataTypes.INTEGER,
                        references: {
                            model: "candidate_master",
                            key: "id",
                        },
                        allowNull: false,
                    },
                    profileImage: {
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
            // Delete candidate other details table
            await query.dropTable("candidate_other_details", { transaction: t })
            // Delete candidate work history table
            await query.dropTable("skills_work_history", { transaction: t })
            await query.dropTable("candidate_work_history", { transaction: t })
            // Delete candidate training/certificate table
            await query.dropTable("candidate_training_cert", { transaction: t })
            // Delete candidate master table
            await query.dropTable("candidate_master", { transaction: t })
            await query.commitTransaction(t)
        } catch (error) {
            await query.rollbackTransaction(t)
            console.log(error)
        }
    },
}
