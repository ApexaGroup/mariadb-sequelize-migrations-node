import { QueryInterface, Op, DataTypes } from "sequelize"
import { v4 } from "uuid"
import generator from "generate-password"
import bcrypt from "bcrypt"
// local imports
import * as config from "../../../config"

module.exports = {
    up: async (query: QueryInterface) => {
        try {
            await query.addColumn("role_master", "isSystemGenerated", {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            })
            await query.bulkInsert("permission_master", [
                {
                    id: 1,
                    name: "user_login",
                    description: null,
                    displayName: "User - Login",
                    group: "Public",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 2,
                    name: "user_read_all",
                    description: null,
                    displayName: "Read all",
                    group: "User",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 3,
                    name: "user_read",
                    description: null,
                    displayName: "Read",
                    group: "User",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 4,
                    name: "user_create",
                    description: null,
                    displayName: "Create",
                    group: "User",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 5,
                    name: "user_update",
                    description: null,
                    displayName: "Update",
                    group: "User",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 6,
                    name: "permission_read_all",
                    description: null,
                    displayName: "Read all",
                    group: "Permission",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 7,
                    name: "permission_read",
                    description: null,
                    displayName: "Read",
                    group: "Permission",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 8,
                    name: "role_read_all",
                    description: null,
                    displayName: "Read all",
                    group: "Role",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 9,
                    name: "role_read",
                    description: null,
                    displayName: "Read",
                    group: "Role",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 10,
                    name: "role_create",
                    description: null,
                    displayName: "Create",
                    group: "Role",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 11,
                    name: "role_update",
                    description: null,
                    displayName: "Update",
                    group: "Role",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 12,
                    name: "product_read_all",
                    description: null,
                    displayName: "Read all",
                    group: "Product",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 13,
                    name: "product_read",
                    description: null,
                    displayName: "Read",
                    group: "Product",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 14,
                    name: "product_create",
                    description: null,
                    displayName: "Create",
                    group: "Product",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 15,
                    name: "product_update",
                    description: null,
                    displayName: "Update",
                    group: "Product",
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
            ])
            await query.bulkInsert("role_master", [
                {
                    id: 1,
                    name: "System Administrator",
                    description: "Super user role generated by the system",
                    uuid: v4(),
                    isSystemGenerated: true,
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 2,
                    name: "User",
                    description: "Normal user role generated by the system",
                    uuid: v4(),
                    isSystemGenerated: true,
                    isActive: true,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
            ])
            await query.bulkInsert("role_permission_relation", [
                {
                    id: 1,
                    roleId: 1,
                    permissionId: 1,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 2,
                    roleId: 1,
                    permissionId: 2,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 3,
                    roleId: 1,
                    permissionId: 3,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 4,
                    roleId: 1,
                    permissionId: 4,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 5,
                    roleId: 1,
                    permissionId: 5,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 6,
                    roleId: 1,
                    permissionId: 6,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 7,
                    roleId: 1,
                    permissionId: 7,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 8,
                    roleId: 1,
                    permissionId: 8,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 9,
                    roleId: 1,
                    permissionId: 9,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 10,
                    roleId: 1,
                    permissionId: 10,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 11,
                    roleId: 1,
                    permissionId: 11,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 12,
                    roleId: 1,
                    permissionId: 12,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 13,
                    roleId: 1,
                    permissionId: 13,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 14,
                    roleId: 1,
                    permissionId: 14,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 15,
                    roleId: 1,
                    permissionId: 15,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
                {
                    id: 16,
                    roleId: 2,
                    permissionId: 1,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
            ])
            await query.bulkInsert("user_master", [
                {
                    id: 1,
                    firstName: config.SysAdm.bms_casa.name,
                    lastName: null,
                    contactNo: config.SysAdm.bms_casa.contactNo,
                    address: null,
                    alternateNo: null,
                    isActive: true,
                    userProfileImage: null,
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
            ])
            const generatedPassword = generator.generate({
                length: 20,
                lowercase: true,
                uppercase: true,
                numbers: true,
                strict: true,
                symbols: true,
            })
            console.log(`Please keep password safe: ` + generatedPassword)
            await query.bulkInsert("user_login", [
                {
                    id: 1,
                    userId: 1,
                    roleId: 1,
                    email: config.SysAdm.bms_casa.email,
                    passwordHash: bcrypt.hashSync(generatedPassword, 12),
                    createdOn: new Date(),
                    modifiedOn: new Date(),
                },
            ])
        } catch (error) {
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        await query.bulkDelete("user_login", {
            id: {
                [Op.eq]: 1,
            },
        })
        await query.bulkDelete("user_master", {
            id: {
                [Op.eq]: 1,
            },
        })
        await query.bulkDelete("role_permission_relation", {
            id: {
                [Op.between]: [1, 16],
            },
        })
        await query.bulkDelete("role_master", {
            id: {
                [Op.in]: [1, 2],
            },
        })
        await query.bulkDelete("permission_master", {
            id: {
                [Op.between]: [1, 15],
            },
        })
    },
}
