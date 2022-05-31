var Bat = Monster.extend({
    // animationList: null,
    ctor:function(){
        this._super(MW.MONSTER.BAT.PNG, MW.MONSTER.BAT.SPEED, MW.MONSTER.BAT.DELAY_PER_FRAME);

        this.animationList = [];

        // 0 is up, 1 is right.
        var frames = [];
        for(var i = 32; i <= 39; i++){
            frames.push(cc.spriteFrameCache.getSpriteFrame("monster_bat_run_00" + i + ".png"));
        }
        this.animationList.push(frames);

        frames = [];
        for(var i = 16; i <= 23; i++){
            frames.push(cc.spriteFrameCache.getSpriteFrame("monster_bat_run_00" + i + ".png"));
        }
        this.animationList.push(frames);

        frames = [];
        for(var i = 0; i <= 7; i++){
            frames.push(cc.spriteFrameCache.getSpriteFrame("monster_bat_run_000" + i + ".png"));
        }
        this.animationList.push(frames);

        // this.init( MW.MONSTER.BAT.SPEED, MW.MONSTER.BAT.DELAY_PER_FRAME);
        this.attr({
            anchorX:MW.MONSTER.BAT.ANCHOR_X,
            anchorY:MW.MONSTER.BAT.ANCHOR_Y,
        });
    },
});