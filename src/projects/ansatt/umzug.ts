import Umzug from "umzug"
import { ormDevelopment, ormProduction } from "./sequelize"
import path from "path"

const umzugDevelopment = new Umzug({
    migrations: {
        path: path.join(__dirname, "migrations"),
        params: [ormDevelopment.getQueryInterface()],
        pattern: /\d{2}_.*\.(t|j)s$/, // access dd_*.ts files where dd stands for two digit
    },
    storage: "sequelize",
    storageOptions: {
        sequelize: ormDevelopment,
    },
})
const umzugProduction = new Umzug({
    migrations: {
        path: path.join(__dirname, "migrations"),
        params: [ormProduction.getQueryInterface()],
        pattern: /\d{2}_.*\.(t|j)s$/, // access dd_*.ts files where dd stands for two digit
    },
    storage: "sequelize",
    storageOptions: {
        sequelize: ormProduction,
    },
})

export { umzugDevelopment, umzugProduction }
