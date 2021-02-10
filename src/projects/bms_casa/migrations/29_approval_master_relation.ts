import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        await query.createTable("approval_master_relation", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            approvalTransId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "approval_trans",
                    key: "id",
                },
                allowNull: false,
            },
            approverMasterId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "approver_master",
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
        })
    },
    down: async (query: QueryInterface) => {
        await query.dropTable("approval_master_relation")
    },
}
