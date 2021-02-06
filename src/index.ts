import inquirer from "inquirer"
import * as handler from "./handler"

console.log("Welcome to Database migrations")

const projects = {
    fieldhero_dev: "fieldhero_dev",
    bms_casa_dev: "bms_casa_dev",
    ansatt_dev: "ansatt_dev",
    ansatt_prod: "ansatt_prod",
}

inquirer
    .prompt([
        {
            choices: [
                {
                    name: "Fieldhero - Development",
                    type: "choice",
                    value: projects.fieldhero_dev,
                },
                {
                    name: "Bid Management System - Casa - Development",
                    type: "choice",
                    value: projects.bms_casa_dev,
                },
                {
                    name: "Ansatt - Development",
                    type: "choice",
                    value: projects.ansatt_dev,
                },
                {
                    name: "Ansatt - Production",
                    type: "choice",
                    value: projects.ansatt_prod,
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
            case projects.fieldhero_dev:
                {
                    handler.fieldhero.loadDevelopment(mode, confirm)
                }
                break
            case projects.bms_casa_dev:
                {
                    handler.bms_casa.loadDevelopment(mode, confirm)
                }
                break
            case projects.ansatt_dev:
                {
                    handler.ansatt.loadDevelopment(mode, confirm)
                }
                break
            case projects.ansatt_prod:
                {
                    handler.ansatt.loadProduction(mode, confirm)
                }
                break
            default:
                break
        }
    })
