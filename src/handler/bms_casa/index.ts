import { bms_casa } from "../../projects"
const loadDevelopment = (mode: string, confirm: boolean): void => {
    bms_casa.umzugDevelopment.pending().then((pending) => {
        console.log(pending)
    })
    switch (mode) {
        case "up":
            {
                if (confirm)
                    bms_casa.umzugDevelopment.up().then(() => {
                        console.log("up success")
                    })
            }
            break
        case "down":
            {
                if (confirm)
                    bms_casa.umzugDevelopment.down().then(() => {
                        console.log("down success")
                    })
            }
            break
        case "executed":
            {
                if (confirm)
                    bms_casa.umzugDevelopment.executed().then((executed) => {
                        console.log(executed)
                    })
            }
            break
        default:
            break
    }
}

export { loadDevelopment }
