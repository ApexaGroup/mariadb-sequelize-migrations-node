import { Sequelize } from "sequelize"
import * as config from "../../config"

const ormDevelopment = new Sequelize({
    host: config.db_configs.admapexa_mariadb_dev.host,
    port: config.db_configs.admapexa_mariadb_dev.port,
    database: config.databases.fh_dev,
    username: config.db_configs.admapexa_mariadb_dev.user,
    password: config.db_configs.admapexa_mariadb_dev.pass,
    dialect: "mariadb",
    dialectOptions: {
        connectionTimeout: 1000,
    },
    logging: false,
    define: {
        freezeTableName: true,
        timestamps: false,
    },
})

export { ormDevelopment }
