import { fieldhero } from "../../projects"
const loadDevelopment = (mode: string, confirm: boolean): void => {
    fieldhero.umzugDevelopment.pending().then((pending) => {
        console.log(pending)
    })
    switch (mode) {
        case "up":
            {
                if (confirm)
                    fieldhero.umzugDevelopment.up().then(() => {
                        console.log("up success")
                    })
            }
            break
        case "down":
            {
                if (confirm)
                    fieldhero.umzugDevelopment.down().then(() => {
                        console.log("down success")
                    })
            }
            break
        case "executed":
            {
                if (confirm)
                    fieldhero.umzugDevelopment.executed().then((executed) => {
                        console.log(executed)
                    })
            }
            break
        default:
            break
    }
}

export { loadDevelopment }
