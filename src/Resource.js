

var play_ground_scene_res = {
	
	paint_boy_font : "res/fonts/Paint Boy.ttf",
	
	cow_png : "res/gfx/cow.png",
	
	grossini_plist : "res/sprite/grossini.plist",
	grossini_png : "res/sprite/grossini.png",
	grossini_anim : "res/sprite/grossini_anim.plist",
	
	grossini_family_plist : "res/sprite/grossini_family.plist",
	grossini_family_png : "res/sprite/grossini_family.png",
	
	frame_decor_png : "res/gfx/frame_decor.png",
	
	cube_blue_png : "res/gfx/cube_blue.png",
	cube_cyan_png : "res/gfx/cube_cyan.png",
	cube_green_png : "res/gfx/cube_green.png",
	cube_orange_png : "res/gfx/cube_orange.png",
	cube_red_png : "res/gfx/cube_red.png",
	cube_stone_png : "res/gfx/cube_stone.png",
	cube_violet_png : "res/gfx/cube_violet.png",
	cube_yellow_png : "res/gfx/cube_yellow.png",
	
	cube_all_plist : "res/sprite/cube_all.plist",
	cube_all_png : "res/sprite/cube_all.png",
	
	race_horse_movie_plist : "res/sprite/race_horse_movie.plist",
	race_horse_movie_png : "res/sprite/race_horse_movie.png",
	race_horse_movie_anim : "res/sprite/race_horse_movie_anim.plist",
	
	raptor_spine_json : "res/spine/raptor.json",
	raptor_spine_atlas : "res/spine/raptor.atlas",
	
	ui_shop_json : "res/ui/shop/DemoShop.json",
	
	ui_test_scene_json : "res/ui/test/MainScene.json",
	ui_test_layer_json : "res/ui/test/Layer.json",
	ui_test_node_json : "res/ui/test/Node.json",
};

var resourceObjectToArray = function (res) 
{
    var resources = [];
	
    for (var key in res)
	{
        resources.push(res[key]);
	}
	
    return resources;
};

var play_ground_scene_res_as_array = resourceObjectToArray(play_ground_scene_res);


var cube_id_to_name = [
	
	play_ground_scene_res.cube_blue_png,
	play_ground_scene_res.cube_cyan_png,
	play_ground_scene_res.cube_green_png,
	play_ground_scene_res.cube_orange_png,
	play_ground_scene_res.cube_red_png,
	play_ground_scene_res.cube_stone_png,
	play_ground_scene_res.cube_violet_png,
	play_ground_scene_res.cube_yellow_png
]


var cube_id_to_frame = [
	
	"cube_blue.png",
	"cube_cyan.png",
	"cube_green.png",
	"cube_orange.png",
	"cube_red.png",
	"cube_stone.png",
	"cube_violet.png",
	"cube_yellow.png"
]

var res = {
	map_cell: "res/sprite/map/map_cell_0000.png",
	map_rock1: "res/sprite/map/map_decoration_rock_0001.png",
	map_tree1: "res/sprite/map/map_decoration_tree_0001.png",
	map_tree2: "res/sprite/map/map_decoration_tree_0004.png",


}




