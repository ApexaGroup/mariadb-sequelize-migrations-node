import inquirer from "inquirer"
import * as handler from "./handler"

console.log("Welcome to Database migrations")

inquirer
    .prompt([
        {
            choices: [
                { name: "Fieldhero", type: "choice", value: "fieldhero" },
                {
                    name: "Bid Management System - Casa",
                    type: "choice",
                    value: "bms_casa",
                },
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
        switch (project) {
            case "fieldhero":
                {
                    handler.fieldhero.load(mode, confirm)
                }
                break
            case "bms_casa":
                {
                    handler.bms_casa.load(mode, confirm)
                }
                break
            default:
                break
        }
    })
