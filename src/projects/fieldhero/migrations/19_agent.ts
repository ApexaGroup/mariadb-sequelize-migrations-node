import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable(
            { tableName: "agent_reg" },
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                fullName: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                address: {
                    type: DataTypes.STRING(500),
                    allowNull: false,
                },
                city: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
                state: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
                country: {
                    type: DataTypes.STRING(45),
                    allowNull: false,
                },
                zip: {
                    type: DataTypes.STRING(10),
                    allowNull: false,
                },
                gender: {
                    type: DataTypes.ENUM,
                    allowNull: false,
                    values: ["male", "female", "transgender"],
                },
                dob: {
                    type: DataTypes.DATEONLY,
                    allowNull: false,
                },
                email: {
                    type: DataTypes.STRING(80),
                    allowNull: false,
                },
                contactNo: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                profStatus: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                },
                bankName: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                bankACNo: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                },
                bankIFSC: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                bankACType: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                panNo: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                panPath: {
                    type: DataTypes.STRING(500),
                    allowNull: false,
                },
                poiType: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                },
                poiPath: {
                    type: DataTypes.STRING(500),
                    allowNull: false,
                },
                poaType: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                },
                poaPath: {
                    type: DataTypes.STRING(500),
                    allowNull: false,
                },
                bankDocType: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                },
                bankDocPath: {
                    type: DataTypes.STRING(500),
                    allowNull: false,
                },
                status: {
                    type: DataTypes.ENUM,
                    allowNull: false,
                    values: [
                        "Pending",
                        "DocReupload",
                        "Registered",
                        "Rejected",
                    ],
                },
                approvedBy: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: "user_master",
                        key: "id",
                    },
                },
                approvedOn: {
                    type: DataTypes.DATE,
                    allowNull: true,
                },
                uuid: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                    allowNull: false,
                },
                createdOn: {
                    type: DataTypes.DATE,
                },
                modifiedOn: {
                    type: DataTypes.DATE,
                },
            }
        )
        await query.createTable(
            { tableName: "user_bank_detail" },
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                userId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: "user_master",
                        key: "id",
                    },
                },
                bankName: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                bankACNo: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                },
                bankIFSC: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                bankACType: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
                isPrimary: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
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
            }
        )
        await query.createTable(
            { tableName: "user_document" },
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                userId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: "user_master",
                        key: "id",
                    },
                },
                panPath: {
                    type: DataTypes.STRING(500),
                    allowNull: true,
                },
                poiType: {
                    type: DataTypes.STRING(30),
                    allowNull: true,
                },
                poiPath: {
                    type: DataTypes.STRING(500),
                    allowNull: true,
                },
                poaType: {
                    type: DataTypes.STRING(30),
                    allowNull: true,
                },
                poaPath: {
                    type: DataTypes.STRING(500),
                    allowNull: true,
                },
                bankDocType: {
                    type: DataTypes.STRING(30),
                    allowNull: true,
                },
                bankDocPath: {
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
            }
        )
    },
    down: async (query: QueryInterface) => {
        await query.dropTable("agent_reg")
        await query.dropTable("user_bank_detail")
        await query.dropTable("user_document")
    },
}
