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
                var bg = new Cell();
                bg.setCellPosition(i,j);
                this.cell_list.push(bg);
                this.addChild(bg);
            }
        }

        this.init();
    },

    init:function(){
        this.attr({
            anchorX: MW.MATRIX.ANCHOR_X,
            anchorY: MW.MATRIX.ANCHOR_Y,
        });
        // this.anchorX = MW.MATRIX.ANCHOR_X;
        // this.anchorY = MW.MATRIX.ANCHOR_Y;

        this.randomMap();

        log(this.barrier);

        for(var i = 0; i < this.num_barrier; i++){
            var p = Barrier.getBarrier(i);
            var idx = this.barrier[i];
            p.setPos(idx);
        }

        this.getPath();

        // for(var i = 0; i < this.shortes_path.length; i++){
        //     var p = new Barrier();
        //     var idx = this.shortes_path[i];
        //     p.setPos(idx);
        //     // log(_x + ", " + _y);
        //     this.addChild(p);
        // }

        log(this.shortes_path);

        var m = new Monster();
        this.addChild(m);
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