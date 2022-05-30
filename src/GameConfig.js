var MW = MW || {};

MW.MATRIX = {
    WIDTH: 7,
    HEIGHT: 7,
    ANCHOR_X: 0,
    ANCHOR_Y: 0,
    START_PNG: "#map_monster_gate_player.png",
    END_PNG: "#map_house.png",
};

MW.NUM_BARRIER = {
    MIN: 5,
    MAX: 7,
}

MW.CELL = {
    SCALE: 2,
    WIDTH: 77*2,
    HEIGHT: 77*2,
    ANCHOR_X: 0,
    ANCHOR_Y: 0,
    CELL_PNG: "#map_cell_0000.png",
}

MW.CONTAINER = {
    BARRIER: [],
    MONSTER: [],
    LIST_BARRIER_NAME: ["#map_decoration_rock_0001.png", "#map_decoration_tree_0001.png", "#map_decoration_tree_0004.png"],
}

MW.RELATIVE_CELL = {
    WIDTH: 20,
    HEIGHT: 50,
}

MW.MONSTER = {
    NUM: 10,
}

MW.MONSTER.ASSASIN ={
    PNG: "#monster_assassin_run_0000.png",
    SPEED: 200,
    DELAY_PER_FRAME: 0.05,
    SCALE: 2,
    ANCHOR_X:0.1,
    ANCHOR_Y:0,
}

MW.MONSTER.BAT ={
    PNG: "#monster_bat_run_0000.png",
    SPEED: 250,
    DELAY_PER_FRAME: 0.05,
    SCALE: 2,
    ANCHOR_X:0,
    ANCHOR_Y:0,
}

MW.MONSTER.DEMON_TREE ={
    PNG: "#monster_demon_tree_run_0000.png",
    SPEED: 100,
    DELAY_PER_FRAME: 0.1,
    SCALE: 2,
    ANCHOR_X:0.15,
    ANCHOR_Y:0.25,
}

MW.MONSTER.GIANT ={
    PNG: "#monster_dark_giant_run_0000.png",
    SPEED: 100,
    DELAY_PER_FRAME: 0.1,
    SCALE: 2,
    ANCHOR_X:0.15,
    ANCHOR_Y:0.25,
}