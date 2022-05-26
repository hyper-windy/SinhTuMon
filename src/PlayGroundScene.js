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
		
        this.init();
    },
	
    init:function () 
	{
		var map = new Map();
		this.addChild(map);
	}
});

