import { Sequelize } from "sequelize"
import * as config from "../../config"

const orm = new Sequelize({
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.databases.fh_dev,
    username: config.DB_USER,
    password: config.DB_PASS,
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

export { orm }
