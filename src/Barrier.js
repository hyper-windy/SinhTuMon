var Barrier = cc.Sprite.extend({
    ctor:function(){
        var k = randomIntFromInterval(0, MW.CONTAINER.LIST_BARRIER_NAME.length - 1);
        this._super(MW.CONTAINER.LIST_BARRIER_NAME[k]);

        this.init();
    },

    init:function(){
        this.attr({
            anchorX: 0,
            anchorY: 0,
            visible: false,
        });
    },

    setPos:function(idx){
        var _y = Math.floor(idx/MW.MATRIX.WIDTH);
        var _x = idx - _y*MW.MATRIX.WIDTH;
        this.attr({
            x: _x*MW.CELL.WIDTH + MW.RELATIVE_CELL.WIDTH,
            y: _y*MW.CELL.HEIGHT + MW.RELATIVE_CELL.HEIGHT,
            visible:true,
        });
    }
});

Barrier.getBarrier = function(i){
    if (MW.CONTAINER.BARRIER.length == 0){
        Barrier.create();
    }
    return MW.CONTAINER.BARRIER[i];
}

Barrier.create = function(){
    for(var i = 0; i < MW.NUM_BARRIER.NUM_POOL; i++){
        var p = new Barrier();
        MW.CONTAINER.BARRIER.push(p);
        shared_map.addChild(p);
    }
}