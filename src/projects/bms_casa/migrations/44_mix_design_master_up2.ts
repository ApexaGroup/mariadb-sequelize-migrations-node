import { QueryInterface, DataTypes } from "sequelize"
module.exports = {
    up: async (query: QueryInterface) => {
        try {
            // Remove Old Columns
            await query.removeColumn(
                { tableName: "mix_design_master" },
                "mdStrength"
            ),
                await query.removeColumn(
                    { tableName: "mix_design_master" },
                    "proportions"
                ),
                await query.removeColumn(
                    { tableName: "mix_design_master" },
                    "unit"
                ),
                await query.removeColumn(
                    { tableName: "mix_design_master" },
                    "estYards"
                ),
                await query.removeColumn(
                    { tableName: "mix_design_master" },
                    "conMix"
                ),
                await query.removeColumn(
                    { tableName: "mix_design_master" },
                    "pumpMix"
                )
            // Add New Columns based on the feedback
            await query.addColumn(
                { tableName: "mix_design_master" },
                "mixDesgnName",
                {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                }
            ),
            await query.addColumn(
                { tableName: "mix_design_master" },
                "mixDesignCode",
                {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                }
            ),        
            await query.addColumn(
                { tableName: "mix_design_master" },
                "wcRatio",
                {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                }
            ),
            await query.addColumn(
                { tableName: "mix_design_master" },
                "minRate",
                {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                }
            ),  
            await query.addColumn(
                { tableName: "mix_design_master" },
                "pumpMixtestingLabName",
                {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                }
            ), 
            await query.addColumn(
                { tableName: "mix_design_master" },
                "plantCodeid",
                {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "company_master",
                        key: "id",
                    },
                    allowNull: false,
                }
            ),
            await query.addColumn(
                { tableName: "mix_design_master" },
                "strengthCategoryid",
                {
                    type: DataTypes.INTEGER,
                    references: {
                        model: "strength_category",
                        key: "id",
                    },
                    allowNull: false,
                }
            )

        } catch (error) {
            console.log(error)
        }
    },
    down: async (query: QueryInterface) => {
        // Add Removed Columns in Down Section
        await query.addColumn(
            { tableName: "mix_design_master" },
            "mdStrength",
            {
                type: DataTypes.STRING(100),
                allowNull: false,
            }
        ),
            await query.addColumn(
                { tableName: "mix_design_master" },
                "proportions",
                {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                }
            ),
            await query.addColumn(
                { tableName: "mix_design_master" },
                "unit",
                {
                    type: DataTypes.STRING(25),
                    allowNull: false,
                }
            ),
            await query.addColumn(
                { tableName: "mix_design_master" },
                "estYards",
                {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                }
            ),      
            await query.addColumn(
                { tableName: "mix_design_master" },
                "conMix",
                {
                    type: DataTypes.DOUBLE,
                    allowNull: false,
                }
            ),
            await query.addColumn(
                { tableName: "mix_design_master" },
                "pumpMix",
                {
                    type: DataTypes.DOUBLE,
                    allowNull: false,
                }
            ),
            // Remove Newly Created Columns based on feedback.
            await query.removeColumn(
                { tableName: "mix_design_master" },
                "mixDesgnName"
            ),
            await query.removeColumn(
                { tableName: "mix_design_master" },
                "mixDesignCode"
            ),
            await query.removeColumn(
                { tableName: "mix_design_master" },
                "wcRatio"
            ),
            await query.removeColumn(
                { tableName: "mix_design_master" },
                "minRate"
            ),
            await query.removeColumn(
                { tableName: "mix_design_master" },
                "pumpMixtestingLabName"
            ),
            await query.removeColumn(
                { tableName: "mix_design_master" },
                "plantCodeid"
            ),
            await query.removeColumn(
                { tableName: "mix_design_master" },
                "strengthCategoryid"
            )
    },
}
