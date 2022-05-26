var shared_map;

var Map = cc.Layer.extend({
    barrier: null,

    num_barrier: null,

    cell_list: null,

    shortes_path: null,

    ctor:function () 
	{
        this._super();

        shared_map = this;

        this.barrier = [];

        this.cell_list = [];

        for(var i = MW.MATRIX.WIDTH - 1; i >= 0; i--){
            for(var j = MW.MATRIX.HEIGHT - 1; j >= 0; j--){
                var bg = new cc.Sprite(res.map_cell);
                bg.attr({
                    x: MW.CELL.WIDTH*i,
                    y: MW.CELL.HEIGHT*j,
                    anchorX: MW.CELL.ANCHOR_X,
                    anchorY: MW.CELL.ANCHOR_Y,
                    scale: MW.CELL.SCALE,
                })
                this.cell_list.push(bg);
                this.addChild(bg);
            }
        }

        // var bg = new cc.Sprite(res.background);
        // bg.attr({
        //     // width: consts.CELL_WIDTH,
        //     // height: consts.CELL_HEIGHT,
        //     x: consts.CELL_WIDTH*1,
        //     y: consts.CELL_HEIGHT*1,
        //     anchorX:0,
        //     anchorY:0,
        // })
        // this.cell_list.push(bg);
        // this.addChild(bg);
        // log(bg.width);
        // log(bg.height);

        this.init();
    },

    init:function(){
        this.anchorX = MW.MATRIX.ANCHOR_X;
        this.anchorY = MW.MATRIX.ANCHOR_Y;

        this.randomMap();

        for(var i = 0; i < this.num_barrier; i++){
            var p = Barrier.getBarrier(i);
            var idx = this.barrier[i];
            var _y = Math.floor(idx/MW.MATRIX.WIDTH);
            var _x = idx - _y*MW.MATRIX.WIDTH;
            // log(_x + ", " + _y);
            p.attr({
                x: _x*MW.CELL.WIDTH + MW.RELATIVE_CELL.WIDTH,
                y: _y*MW.CELL.HEIGHT + MW.RELATIVE_CELL.HEIGHT,
                visible:true,
            });
        }

        this.getPath();

        for(var i = 0; i < x.length; i++){
            var p = new cc.Sprite(res.map_cell);
            var idx = x[i];
            var _y = Math.floor(idx/MW.MATRIX.WIDTH);
            var _x = idx - _y*MW.MATRIX.WIDTH;
            // log(_x + ", " + _y);
            p.attr({
                x: _x*MW.CELL.WIDTH + MW.RELATIVE_CELL.WIDTH,
                y: _y*MW.CELL.HEIGHT + MW.RELATIVE_CELL.HEIGHT,
                zIndex:100,
                anchorX:0,
                anchorY:0,
            });
            this.addChild(p);
        }
    },
	
    randomMap:function () 
	{
		var temp_arr = [];

        for (var i = 1; i < MW.MATRIX.WIDTH * MW.MATRIX.HEIGHT - 1; i++){
            temp_arr.push(i);
        }

        this.num_barrier = randomIntFromInterval(MW.NUM_BARRIER.MIN, MW.NUM_BARRIER.MAX);

        for(var i = 0; i < this.num_barrier; i++){
            var k = randomIntFromInterval(0, temp_arr.length-1);
            var t = temp_arr[k];
            this.barrier.push(t);
            var elem = [t-1, t, t+1, t-MW.MATRIX.WIDTH, t-MW.MATRIX.WIDTH - 1, t - MW.MATRIX.WIDTH + 1, t+MW.MATRIX.WIDTH, t+MW.MATRIX.WIDTH-1, t+MW.MATRIX.WIDTH+1];
            temp_arr = temp_arr.filter(e => elem.indexOf(e) == -1);
        }

	},

    getPath:function(){
        this.shortes_path = bfs(0, 48);
    }
});