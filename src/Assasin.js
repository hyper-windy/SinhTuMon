var Assasin = Monster.extend({
    // animationList: null,
    ctor:function(){
        this._super(MW.MONSTER.ASSASIN.PNG, MW.MONSTER.ASSASIN.SPEED, MW.MONSTER.ASSASIN.DELAY_PER_FRAME);

        this.animationList = [];

        // 0 is up, 1 is right.
        var frames = [];
        for(var i = 40; i <= 49; i++){
            frames.push(cc.spriteFrameCache.getSpriteFrame("monster_assassin_run_00" + i + ".png"));
        }
        this.animationList.push(frames);

        frames = [];
        for(var i = 20; i <= 29; i++){
            frames.push(cc.spriteFrameCache.getSpriteFrame("monster_assassin_run_00" + i + ".png"));
        }
        this.animationList.push(frames);

        // this.init( MW.MONSTER.ASSASIN.SPEED, MW.MONSTER.ASSASIN.DELAY_PER_FRAME);
        this.attr({
            anchorX:MW.MONSTER.ASSASIN.ANCHOR_X,
            anchorY:MW.MONSTER.ASSASIN.ANCHOR_Y,
        });
    },
});