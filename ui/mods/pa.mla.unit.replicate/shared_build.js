var newBuild = {
    "/pa/units/addon/factory_1/factory_1.json": ["grug", 0, { row: 2, column: 0 }],
    "/pa/units/addon/r_grug/r_grug.json": ["gruglike", 0, { row: 2, column: 0 }],

    "/pa/units/addon/r_turret_1/r_turret_1.json": ["build", 0, { row: 2, column: 0 }],
    "/pa/units/addon/r_air_defense/r_air_defense.json": ["build", 0, { row: 2, column: 1 }],
    "/pa/units/addon/r_radar/r_radar.json": ["build", 0, { row: 2, column: 2 }],
    "/pa/units/addon/r_artillery/r_artillery.json": ["build", 0, { row: 2, column: 3 }],
    "/pa/units/addon/r_teleporter/r_teleporter.json": ["build", 0, { row: 2, column: 4 }],
    "/pa/units/addon/r_umbrella/r_umbrella.json": ["build", 0, { row: 2, column: 5 }],

    // "/pa/units/addon/r_artillery/r_artillery.json": ["build", 0, { row: 1, column: 0 }],
    // "/pa/units/addon/r_air_defense/r_air_defense.json": ["build", 0, { row: 1, column: 1 }]

    //full:
    
    // "/pa/units/addon/r_mine/r_mine.json": ["build", 0, { row: 2, column: 0 }],
    // "/pa/units/addon/r_radar/r_radar.json": ["build", 0, { row: 2, column: 1 }],
    // "/pa/units/addon/r_teleporter/r_teleporter.json": ["build", 0, { row: 2, column: 2 }],
    // "/pa/units/addon/r_turret_1/r_turret_1.json": ["build", 0, { row: 2, column: 3 }],
    // "/pa/units/addon/r_umbrella/r_umbrella.json": ["build", 0, { row: 2, column: 4 }],
    // "/pa/units/addon/r_wall/r_wall.json": ["build", 0, { row: 2, column: 5 }],

    // "/pa/units/addon/r_artillery/r_artillery.json": ["build", 0, { row: 1, column: 0 }],
    // "/pa/units/addon/r_air_defense/r_air_defense.json": ["build", 0, { row: 1, column: 1 }]

}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}
