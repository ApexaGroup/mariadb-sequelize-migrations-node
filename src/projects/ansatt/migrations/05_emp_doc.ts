import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.createTable("emp_upload_doc", {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                documentType: {
                    type: DataTypes.ENUM,
                    allowNull: false,
                    values: [
                        "poi",
                        "poa",
                        "bank",
                        "resume",
                        "hsw",
                        "expense",
                        "other",
                    ],
                    defaultValue: "other",
                },
                docName: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING(500),
                    allowNull: true,
                },
                comment: {
                    type: DataTypes.STRING(500),
                    allowNull: true,
                },
                docPath: {
                    type: DataTypes.STRING(500),
                    allowNull: false,
                },
                uuid:{
                    type: DataTypes.UUID,
                    allowNull: false,
                    unique: true,
                    defaultValue: DataTypes.UUIDV4
                },
                empId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "emp_basic_detail",
                        key: "id",
                    },
                    allowNull: false,
                },
                empCode: {
                    type: DataTypes.STRING(20),
                    references: {
                        model: "emp_basic_detail",
                        key: "empCode",
                    },
                    allowNull: false,
                },
                createdOn: {
                    type: DataTypes.DATE,
                },
                createdBy: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: "user_login",
                        key: "id",
                    },
                },
                modifiedOn: {
                    type: DataTypes.DATE,
                },
                modifiedBy: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: "user_login",
                        key: "id",
                    },
                },
            })
        } catch (error) {
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        await query.dropTable("emp_upload_doc")
    },
}
