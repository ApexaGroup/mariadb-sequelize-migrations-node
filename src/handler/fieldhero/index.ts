import { fieldhero } from "../../projects"
const load = (mode: string, confirm: boolean): void => {
    fieldhero.umzug.pending().then((pending) => {
        console.log(pending)
    })
    switch (mode) {
        case "up":
            {
                if (confirm)
                    fieldhero.umzug.up().then(() => {
                        console.log("up success")
                    })
            }
            break
        case "down":
            {
                if (confirm)
                    fieldhero.umzug.down().then(() => {
                        console.log("down success")
                    })
            }
            break
        case "executed":
            {
                if (confirm)
                    fieldhero.umzug.executed().then((executed) => {
                        console.log(executed)
                    })
            }
            break
        default:
            break
    }
}

export { load }
