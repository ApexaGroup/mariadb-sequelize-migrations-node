import { Umzug } from "umzug"

const load = async (
    mode: string,
    confirm: boolean,
    umzug: Umzug
): Promise<void> => {
    try {
        switch (mode) {
            case "up":
                {
                    if (confirm) {
                        await umzug.up()
                        console.log("up success")
                    }
                }
                break
            case "down":
                {
                    if (confirm) {
                        await umzug.down()
                        console.log("down success")
                    }
                }
                break
            case "executed": {
                if (confirm) {
                    const executed = await umzug.executed()
                    console.log(executed)
                }
                break
            }
            case "pending":
                {
                    if (confirm) {
                        const pending = await umzug.pending()
                        console.log(pending)
                    }
                }
                break
            default:
                break
        }
    } catch (error) {
        console.log(error)
    }
}

export { load }
