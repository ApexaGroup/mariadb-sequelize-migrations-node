import Umzug from "umzug"
import { orm } from "./sequelize"
import path from "path"

const umzug = new Umzug({
    migrations: {
        path: path.join(__dirname, "migrations"),
        params: [orm.getQueryInterface()],
        pattern: /\d{2}_.*\.(t|j)s$/, // access dd_*.ts files where dd stands for two digit
    },
    storage: "sequelize",
    storageOptions: {
        sequelize: orm,
    },
})

export { umzug }
