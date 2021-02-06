import { ansatt } from "../../projects"
// Development
const loadDevelopment = (mode: string, confirm: boolean): void => {
    ansatt.umzugDevelopment.pending().then((pending: any) => {
        console.log(pending)
    })
    switch (mode) {
        case "up":
            {
                if (confirm)
                    ansatt.umzugDevelopment.up().then(() => {
                        console.log("up success")
                    })
            }
            break
        case "down":
            {
                if (confirm)
                    ansatt.umzugDevelopment.down().then(() => {
                        console.log("down success")
                    })
            }
            break
        case "executed":
            {
                if (confirm)
                    ansatt.umzugDevelopment.executed().then((executed: any) => {
                        console.log(executed)
                    })
            }
            break
        default:
            break
    }
}
// Production
const loadProduction = (mode: string, confirm: boolean): void => {
    ansatt.umzugProduction.pending().then((pending: any) => {
        console.log(pending)
    })
    switch (mode) {
        case "up":
            {
                if (confirm)
                    ansatt.umzugProduction.up().then(() => {
                        console.log("up success")
                    })
            }
            break
        case "down":
            {
                if (confirm)
                    ansatt.umzugProduction.down().then(() => {
                        console.log("down success")
                    })
            }
            break
        case "executed":
            {
                if (confirm)
                    ansatt.umzugProduction.executed().then((executed: any) => {
                        console.log(executed)
                    })
            }
            break
        default:
            break
    }
}

export { loadDevelopment, loadProduction }
