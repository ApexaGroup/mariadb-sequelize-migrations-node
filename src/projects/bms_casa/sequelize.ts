import { Sequelize } from "sequelize"
import * as config from "../../config"

const ormDevelopment = new Sequelize({
    host: config.db_configs.admapexa_mariadb_dev.host,
    port: config.db_configs.admapexa_mariadb_dev.port,
    database: config.databases.bms_casa_dev,
    username: config.db_configs.admapexa_mariadb_dev.user,
    password: config.db_configs.admapexa_mariadb_dev.pass,
    dialect: "mariadb",
    dialectOptions: {
        connectionTimeout: 1000,
    },
    logging: false,
    define: {
        freezeTableName: true,
        timestamps: true,
        createdAt: "createdOn",
        updatedAt: "modifiedOn",
    },
})

const ormStage = new Sequelize({
    host: config.db_configs.admapexa_mariadb_dev.host,
    port: config.db_configs.admapexa_mariadb_dev.port,
    database: config.databases.bms_casa_stage,
    username: config.db_configs.admapexa_mariadb_dev.user,
    password: config.db_configs.admapexa_mariadb_dev.pass,
    dialect: "mariadb",
    dialectOptions: {
        connectionTimeout: 1000,
    },
    logging: false,
    define: {
        freezeTableName: true,
        timestamps: true,
        createdAt: "createdOn",
        updatedAt: "modifiedOn",
    },
})

export { ormDevelopment, ormStage }
