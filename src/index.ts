import inquirer from "inquirer"
// local imports
import * as handler from "./handler"
import * as migrations from "./projects"

console.log("Welcome to Database migrations")

const projects = {
    fieldhero_dev: "fieldhero_dev",
    fieldhero_stage: "fieldhero_stage",
    bms_casa_dev: "bms_casa_dev",
    bms_casa_stage: "bms_casa_stage",
    ansatt_dev: "ansatt_dev",
    ansatt_prod: "ansatt_prod",
    exit: "exit",
}

const inquireInitiate = () => {
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
                        name: "Fieldhero - Stage",
                        type: "choice",
                        value: projects.fieldhero_stage,
                    },
                    {
                        name: "Bid Management System - Casa - Development",
                        type: "choice",
                        value: projects.bms_casa_dev,
                    },
                    {
                        name: "Bid Management System - Casa - Stage",
                        type: "choice",
                        value: projects.bms_casa_stage,
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
                    {
                        name: "Exit",
                        type: "choice",
                        value: projects.exit,
                    },
                ],
                type: "list",
                name: "project",
                message: "Please select project: ",
            },
        ])
        .then(({ project }) => {
            switch (project) {
                case projects.exit:
                    {
                        process.abort()
                    }
                    break
                default:
                    inquireAfterProject(project)
                    break
            }
        })
}

const inquireAfterProject = (project: string) => {
    inquirer
        .prompt([
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
                    {
                        name: "Pending",
                        type: "choice",
                        value: "pending",
                    },
                ],
            },
            {
                type: "confirm",
                name: "confirm",
                message: "Are you sure?",
            },
        ])
        .then(({ mode, confirm }) => {
            switch (project) {
                case projects.fieldhero_dev:
                    {
                        handler
                            .load(
                                mode,
                                confirm,
                                migrations.fieldhero.umzugDevelopment
                            )
                            .then(() => {
                                inquireInitiate()
                            })
                    }
                    break
                case projects.fieldhero_stage:
                    {
                        handler
                            .load(
                                mode,
                                confirm,
                                migrations.fieldhero.umzugStage
                            )
                            .then(() => {
                                inquireInitiate()
                            })
                    }
                    break
                case projects.bms_casa_dev:
                    {
                        handler
                            .load(
                                mode,
                                confirm,
                                migrations.bms_casa.umzugDevelopment
                            )
                            .then(() => {
                                inquireInitiate()
                            })
                    }
                    break
                case projects.bms_casa_stage:
                    {
                        handler
                            .load(mode, confirm, migrations.bms_casa.umzugStage)
                            .then(() => {
                                inquireInitiate()
                            })
                    }
                    break
                case projects.ansatt_dev:
                    {
                        handler
                            .load(
                                mode,
                                confirm,
                                migrations.ansatt.umzugDevelopment
                            )
                            .then(() => {
                                inquireInitiate()
                            })
                    }
                    break
                case projects.ansatt_prod:
                    {
                        handler
                            .load(
                                mode,
                                confirm,
                                migrations.ansatt.umzugProduction
                            )
                            .then(() => {
                                inquireInitiate()
                            })
                    }
                    break
                default:
                    break
            }
        })
}

inquireInitiate()
