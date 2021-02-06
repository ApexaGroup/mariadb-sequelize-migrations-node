import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable(
            { tableName: "emp_basic_detail" },
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                empCode: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                    unique: true,
                },
                firstName: {
                    type: DataTypes.STRING(60),
                    allowNull: false,
                },
                lastName: {
                    type: DataTypes.STRING(60),
                    allowNull: true,
                },
                mobile: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                    unique: true,
                },
                altMobile: {
                    type: DataTypes.STRING(20),
                    allowNull: true,
                },
                email: {
                    type: DataTypes.STRING(80),
                    allowNull: true,
                },
                gender: {
                    type: DataTypes.ENUM,
                    allowNull: true,
                    values: ["male", "female", "transgender"],
                },
                birthDate: {
                    type: DataTypes.DATEONLY,
                    allowNull: false,
                },
                aadharNo: {
                    type: DataTypes.STRING(20),
                    allowNull: true,
                    unique: true,
                },
                panNo: {
                    type: DataTypes.STRING(15),
                    allowNull: true,
                    unique: true,
                },
                uuid: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    unique: true,
                    defaultValue: DataTypes.UUIDV4,
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
            }
        )
        await query.changeColumn("user_login", "empId", {
            type: DataTypes.INTEGER,
            allowNull: false,
        })
        // to create foreign key, create index and then create constraint
        await query.addIndex("user_login", ["empId"], {
            name: "empId",
        })
        await query.addConstraint("user_login", {
            type: "foreign key",
            fields: ["empId"],
            name: "user_login_fk_empId",
            references: {
                table: "emp_basic_detail",
                field: "id",
            },
            onDelete: "cascade",
            onUpdate: "cascade",
        })
        //
        await query.createTable("emp_address_detail", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            address: {
                type: DataTypes.STRING(500),
                allowNull: true,
            },
            region: {
                type: DataTypes.STRING(40),
                allowNull: true,
            },
            city: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            state: {
                type: DataTypes.STRING(40),
                allowNull: true,
            },
            pincode: {
                type: DataTypes.STRING(10),
                allowNull: true,
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
        //
        query.createTable("emp_employment_detail", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            designation: {
                type: DataTypes.STRING(40),
                allowNull: false,
            },
            dateOfJoin: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            isPFAvailable: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            pfNo: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            uanNo: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            isESICAvailable: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            esicNo: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            dateOfLeave: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            appraisalStatus: {
                type: DataTypes.ENUM,
                allowNull: false,
                values: ["new", "increment", "promotion"],
                defaultValue: "new",
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
        //
        query.createTable("emp_bank_detail", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            bankName: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            branchName: {
                type: DataTypes.STRING(150),
                allowNull: true,
            },
            ifsc: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            acno: {
                type: DataTypes.STRING(40),
                allowNull: false,
            },
            acHolder: {
                type: DataTypes.STRING(100),
                allowNull: false,
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
        //
        query.createTable("emp_bill_details", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            billToState: {
                type: DataTypes.STRING(60),
                allowNull: true,
            },
            billToDepot: {
                type: DataTypes.STRING(60),
                allowNull: true,
            },
            billTradeArea: {
                type: DataTypes.STRING(60),
                allowNull: true,
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
        //
        query.createTable("emp_salary_detail", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            basicSalary: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            hra: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0,
            },
            bonus: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0,
            },
            medicalAllowance: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0,
            },
            gross: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0,
            },
            pf: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0,
            },
            esic: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0,
            },
            ptax: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0,
            },
            netDeduction: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            netPayable: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            empPF: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0,
            },
            empESIC: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0,
            },
            ctc: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            ruralAllowance: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0,
            },
            otherEarning: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                defaultValue: 0,
            },
            empEmploymentId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "emp_employment_detail",
                    key: "id",
                },
                allowNull: false,
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
    },
    down: async (query: QueryInterface) => {
        await query.dropTable("emp_salary_detail")
        await query.dropTable("emp_bill_details")
        await query.dropTable("emp_bank_detail")
        await query.dropTable("emp_employment_detail")
        await query.dropTable("emp_address_detail")
        // to remove foreign key, remove and constraint and index as well if needed
        await query.removeConstraint("user_login", "user_login_fk_empId")
        await query.removeIndex("user_login", "empId")
        await query.changeColumn("user_login", "empId", {
            type: DataTypes.INTEGER,
            allowNull: true,
        })
        await query.dropTable("emp_basic_detail")
    },
}
