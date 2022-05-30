var DemonTree = Monster.extend({
    // animationList: null,
    ctor:function(){
        this._super(MW.MONSTER.DEMON_TREE.PNG, MW.MONSTER.DEMON_TREE.SPEED, MW.MONSTER.DEMON_TREE.DELAY_PER_FRAME);

        this.animationList = [];

        // 0 is up, 1 is right.
        var frames = [];
        for(var i = 44; i <= 54; i++){
            frames.push(cc.spriteFrameCache.getSpriteFrame("monster_demon_tree_run_00" + i + ".png"));
        }
        this.animationList.push(frames);

        frames = [];
        for(var i = 22; i <= 32; i++){
            frames.push(cc.spriteFrameCache.getSpriteFrame("monster_demon_tree_run_00" + i + ".png"));
        }
        this.animationList.push(frames);

        // this.init( MW.MONSTER.DEMON_TREE.SPEED, MW.MONSTER.DEMON_TREE.DELAY_PER_FRAME);
        this.attr({
            anchorX:MW.MONSTER.DEMON_TREE.ANCHOR_X,
            anchorY:MW.MONSTER.DEMON_TREE.ANCHOR_Y,
        });
    },
});