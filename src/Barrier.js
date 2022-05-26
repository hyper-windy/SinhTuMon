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
    }
});

Barrier.getBarrier = function(i){
    if (MW.CONTAINER.BARRIER.length == 0){
        Barrier.create();
    }

    return MW.CONTAINER.BARRIER[i];
}

Barrier.create = function(){
    for(var i = 0; i < MW.NUM_BARRIER.MAX; i++){
        var p = new Barrier();
        MW.CONTAINER.BARRIER.push(p);
        shared_map.addChild(p);
    }
}