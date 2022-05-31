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

        var start = new cc.Sprite(MW.MATRIX.START_PNG);
        var end = new cc.Sprite(MW.MATRIX.END_PNG);
        start.attr({
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y: 20,
            scale:0.7,
        });
        end.attr({
            anchorX: 0,
            anchorY: 0,
            x: (MW.MATRIX.WIDTH-1)*MW.CELL.WIDTH + 20,
            y: (MW.MATRIX.HEIGHT-1)*MW.CELL.HEIGHT + 60,
        });
        this.addChild(start);
        this.addChild(end);

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

        // this.getPath();

        // for(var i = 0; i < this.shortes_path.length; i++){
        //     var p = new Barrier();
        //     var idx = this.shortes_path[i];
        //     p.setPos(idx);
        //     // log(_x + ", " + _y);
        //     this.addChild(p);
        // }

        // log(this.shortes_path);


        this.schedule(this.bornMonster, 2);

        // var p = new Assasin();
        // this.addChild(p);
        // p.run();
        // var path = m.getPath();
        // log(path);
        // for(var i = 0; i < path.length; i++){
        //     var p = new Monster();
        //     var idx = path[i];
        //     p.setPos(idx);
        //     // log(_x + ", " + _y);
        //     this.addChild(p);
        // }
        log(this.barrier);
        if( 'mouse' in cc.sys.capabilities ) {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: function(event) {
                    // var pos = event.getLocation(), target = event.getCurrentTarget();
                    // if(event.getButton() === cc.EventMouse.BUTTON_RIGHT)
                    //     cc.log("onRightMouseDown at: " + pos.x + " " + pos.y );
                    // else if(event.getButton() === cc.EventMouse.BUTTON_LEFT)
                    //     cc.log("onLeftMouseDown at: " + pos.x + " " + pos.y );
                    // target.sprite.x = pos.x;
                    // target.sprite.y = pos.y;
                    var pos = event.getLocation();
                    var x = Math.floor(pos.x/MW.CELL.WIDTH);
                    var y = Math.floor(pos.y/MW.CELL.HEIGHT);
                    var curr_pos = y*MW.MATRIX.WIDTH + x;
                    this.barrier.push(curr_pos);
                    var p = Barrier.getBarrier(this.num_barrier);
                    p.setPos(curr_pos);
                    this.num_barrier++;
                    // cc.log("onLeftMouseDown at: " + pos.x + " " + pos.y );
                    Monster.updateAllMonster();
                
                }.bind(this),
                // onMouseMove: function(event){
                //     var pos = event.getLocation(), target = event.getCurrentTarget();
                //     cc.log("onMouseMove at: " + pos.x + " " + pos.y );
                //     // target.sprite.x = pos.x;
                //     // target.sprite.y = pos.y;
                // },
                // onMouseUp: function(event){
                //     var pos = event.getLocation(), target = event.getCurrentTarget();
				// 		// target.sprite.x = pos.x;
				// 		// target.sprite.y = pos.y;
                //     cc.log("onMouseUp at: " + pos.x + " " + pos.y );
                // }
            }, this);
			log("hello");
        } else {
            cc.log("MOUSE Not supported");
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
    },

    bornMonster:function(){
        var p = Monster.getMonster();
        if(p != null){
            p.run();
        }
    }
});