var Giant = Monster.extend({
    // animationList: null,
    ctor:function(){
        this._super(MW.MONSTER.GIANT.PNG, MW.MONSTER.GIANT.SPEED, MW.MONSTER.GIANT.DELAY_PER_FRAME);

        this.animationList = [];

        // 0 is up, 1 is right.
        var frames = [];
        for(var i = 56; i <= 69; i++){
            frames.push(cc.spriteFrameCache.getSpriteFrame("monster_dark_giant_run_00" + i + ".png"));
        }
        this.animationList.push(frames);

        frames = [];
        for(var i = 28; i <= 41; i++){
            frames.push(cc.spriteFrameCache.getSpriteFrame("monster_dark_giant_run_00" + i + ".png"));
        }
        this.animationList.push(frames);

        // this.init( MW.MONSTER.GIANT.SPEED, MW.MONSTER.GIANT.DELAY_PER_FRAME);
        this.attr({
            anchorX:MW.MONSTER.GIANT.ANCHOR_X,
            anchorY:MW.MONSTER.GIANT.ANCHOR_Y,
        });
    },
});