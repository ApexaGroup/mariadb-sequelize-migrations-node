import inquirer from "inquirer"
import * as projects from "./projects"

console.log("Welcome to Database migrations")

inquirer
    .prompt([
        {
            choices: [
                { name: "Fieldhero", type: "choice", value: "fieldhero" },
            ],
            type: "list",
            name: "project",
            message: "Please select project: ",
        },
        {
            type: "list",
            message: "Choose your mode: ",
            name: "mode",
            choices: [
                {
                    name: "Up",
                    type: "choice",
                    value: "up",
                },
                {
                    name: "Down",
                    type: "choice",
                    value: "down",
                },
                {
                    name: "Executed",
                    type: "choice",
                    value: "executed",
                },
            ],
        },
        {
            type: "confirm",
            name: "confirm",
            message: "Are you sure?",
        },
    ])
    .then(({ project, mode, confirm }) => {
        console.log(project, mode, confirm)
        switch (project) {
            case "fieldhero":
                {
                    projects.fieldhero.umzug.pending().then((pending) => {
                        console.log(pending)
                    })
                    switch (mode) {
                        case "up":
                            {
                                if (confirm)
                                    projects.fieldhero.umzug.up().then(() => {
                                        console.log("up success")
                                    })
                            }
                            break
                        case "down":
                            {
                                if (confirm)
                                    projects.fieldhero.umzug.down().then(() => {
                                        console.log("down success")
                                    })
                            }
                            break
                        case "executed":
                            {
                                if (confirm)
                                    projects.fieldhero.umzug
                                        .executed()
                                        .then((executed) => {
                                            console.log(executed)
                                        })
                            }
                            break
                        default:
                            break
                    }
                }
                break
            default:
                break
        }
    })
