var PlayGroundScene = cc.Scene.extend({
	
	ctor:function () 
	{
        this._super();
		
        var main_layer = new PlayGround();
		
		this.addChild(main_layer);
    },
	
});

var PlayGround = cc.Layer.extend({
	
    ctor:function () 
	{
        this._super();
		
        cc.spriteFrameCache.addSpriteFrames(res.map_plist, res.map_png);
        cc.spriteFrameCache.addSpriteFrames(res.assasin_plist, res.assasin_png);

        this.init();
    },
	
    init:function () 
	{
		var map = new Map();
		this.addChild(map);
	}
});

