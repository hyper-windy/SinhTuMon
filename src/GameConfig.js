var MW = MW || {};

MW.MATRIX = {
    WIDTH: 7,
    HEIGHT: 7,
    ANCHOR_X: 0,
    ANCHOR_Y: 0,
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

MW.MONSTER = {}

MW.MONSTER.ASSASIN ={
    PNG: "#monster_assassin_run_0000.png",
    SPEED: 100,
    SCALE: 2,
}