var Cell = cc.Sprite.extend({
    ctor:function(){
        this._super(MW.CELL.CELL_PNG);

        this.init();
    },

    init:function(){
        this.attr({
            anchorX: MW.CELL.ANCHOR_X,
            anchorY: MW.CELL.ANCHOR_Y,
            scale: MW.CELL.SCALE,
        });
    },

    setCellPosition:function(i, j){
        this.x = MW.CELL.WIDTH*i;
        this.y = MW.CELL.HEIGHT*j;
    }
});