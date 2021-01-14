import { bms_casa } from "../../projects"
const load = (mode: string, confirm: boolean): void => {
    bms_casa.umzug.pending().then((pending) => {
        console.log(pending)
    })
    switch (mode) {
        case "up":
            {
                if (confirm)
                    bms_casa.umzug.up().then(() => {
                        console.log("up success")
                    })
            }
            break
        case "down":
            {
                if (confirm)
                    bms_casa.umzug.down().then(() => {
                        console.log("down success")
                    })
            }
            break
        case "executed":
            {
                if (confirm)
                    bms_casa.umzug.executed().then((executed) => {
                        console.log(executed)
                    })
            }
            break
        default:
            break
    }
}

export { load }
