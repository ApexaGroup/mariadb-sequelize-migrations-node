import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.renameColumn("user_login", "emailId", "email")
    },
    down: async (query: QueryInterface) => {
        await query.renameColumn("user_login", "email", "emailId")
    },
}
