export const App_Port: number = parseInt(process.env.PORT || "8080")
// databases
export const databases = {
    fh_dev: "fieldhero_customer_dev",
    bms_casa_dev: "bms_casa_dev",
    ansatt_dev: "apexa_ansatt_db_dev",
    ansatt_prod: "apexa_ansatt_db",
}
// all server configs
export const db_configs = {
    admapexa_mariadb_dev: {
        host: process.env.DB_ADMAPEXA_MARIA_HOST || "localhost",
        port: parseInt(process.env.DB_ADMAPEXA_MARIA_PORT || "3006"),
        user: process.env.DB_ADMAPEXA_MARIA_USER || "user",
        pass: process.env.DB_ADMAPEXA_MARIA_PASS || "password",
    },
    admapexa_pg_dev: {
        host: process.env.DB_ADMAPEXA_PG_HOST || "localhost",
        port: parseInt(process.env.DB_ADMAPEXA_PG_PORT || "5432"),
        user: process.env.DB_ADMAPEXA_PG_USER || "user",
        pass: process.env.DB_ADMAPEXA_PG_PASS || "password",
    },
    admaman_pg_prod: {
        host: process.env.DB_ADMAMAN_PG_HOST || "localhost",
        port: parseInt(process.env.DB_ADMAMAN_PG_PORT || "5432"),
        user: process.env.DB_ADMAMAN_PG_USER || "user",
        pass: process.env.DB_ADMAMAN_PG_PASS || "password",
    },
}

export const SysAdm = {
    name: process.env.SYSADM_NAME || "User",
    email: process.env.SYSADM_EMAIL || "user@email.com",
    contactNo: process.env.SYSADM_CONTACT || "9876543210",
    bms_casa: {
        name: process.env.BMS_CASA_SYSADM_NAME || "User",
        email: process.env.BMS_CASA_SYSADM_EMAIL || "user@email.com",
        contactNo: process.env.BMS_CASA_SYSADM_CONTACT || "9876543210",
    },
}
