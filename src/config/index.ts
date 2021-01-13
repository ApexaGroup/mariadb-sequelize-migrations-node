export const PORT: number = parseInt(process.env.PORT || "8080")
export const DB_HOST: string = process.env.DB_HOST || "localhost"
export const DB_PORT: number = parseInt(process.env.DB_PORT || "3006")
export const DB_NAME: string = process.env.DB_NAME || "localhost"
export const DB_USER: string = process.env.DB_USER || "localhost"
export const DB_PASS: string = process.env.DB_PASS || "localhost"
export const databases = {
    fh_dev: "fieldhero_customer_dev",
    bms_casa_dev: "bms_casa_dev",
}
