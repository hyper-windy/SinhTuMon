var Monster = cc.Sprite.extend({
    next_pos: null,
    next_cell: null,
    speed: null,
    curr_direction: null,

    animationList: null,

    full_path: null,

    path: null,

    delay_per_frame: null,

    base_speed: null,

    ctor:function(png, speed, delay_per_frame){
        this._super(png);

        // this.getPath();

        this.base_speed = speed;

        this.delay_per_frame = delay_per_frame;

        // this.animationList = [];

        // // 0 is up, 1 is right.
        // var frames = [];
        // for(var i = 40; i <= 49; i++){
        //     frames.push(cc.spriteFrameCache.getSpriteFrame("monster_assassin_run_00" + i + ".png"));
        // }
        // this.animationList.push(frames);

        // frames = [];
        // for(var i = 20; i <= 29; i++){
        //     frames.push(cc.spriteFrameCache.getSpriteFrame("monster_assassin_run_00" + i + ".png"));
        // }
        // this.animationList.push(frames);



        // this.init(speed, delay_per_frame);

        this.init();
        
    },

    // findPath:function(){

    // },

    findPath:function(src){
        var x = Math.floor(this.x/MW.CELL.WIDTH);
        var y = Math.floor(this.y/MW.CELL.HEIGHT);
        var curr_pos = y*MW.MATRIX.WIDTH + x;
        this.full_path = bfs(curr_pos, 48);
        this.getPath(curr_pos);
        
        this.next_cell = 0;
        this.next_pos = this.getPos(this.path[this.next_cell]);
        this.changeDirection();
        // log(this.next_cell);
        // log(this.next_pos);
    },

    getPath:function(curr_pos){
        this.path = [];
        this.path.push(curr_pos);
        var prev = this.full_path[1] - curr_pos;
        for (var i = 2; i < this.full_path.length; i++){
            if (this.full_path[i] - this.full_path[i-1] == prev){
                continue;
            }
            this.path.push(this.full_path[i-1]);
            // this.path.push(shared_map.shortes_path[i]);
            prev = this.full_path[i] - this.full_path[i-1];
        }
        this.path.push(48);
        return this.path;
    },

    init:function(){
        this.speed = this.base_speed;
        // this.visible = false;

        // this.next_cell = 0; 
        // this.next_pos = this.getPos(this.path[this.next_cell]);
        // this.changeDirection();
        this.attr({
            x: 0,
            y: 0,
            // anchorX: 0,
            // anchorY: 0,
            scale: MW.MONSTER.ASSASIN.SCALE,
            visible: false,
        });
      
        // this.scheduleUpdate();
    },

    getPos:function(idx, dimension = null){
        var _y = Math.floor(idx/MW.MATRIX.WIDTH);
        var _x = idx - _y*MW.MATRIX.WIDTH;
        if (dimension == null) {
            return [_x, _y];
        }
        if(dimension == 0){
            return _x;
        }
        if (dimension == 1){
            return _y;
        }
    },

    setPos:function(idx){
        var _y = Math.floor(idx/MW.MATRIX.WIDTH);
        var _x = idx - _y*MW.MATRIX.WIDTH;
        this.attr({
            x: _x*MW.CELL.WIDTH + MW.RELATIVE_CELL.WIDTH,
            y: _y*MW.CELL.HEIGHT + MW.RELATIVE_CELL.HEIGHT,
            visible:true,
        });
    },

    changeDirection:function(){
        if (this.next_cell == this.path.length - 1){
            this.destroy();
        }
        else {
            // this.curr_direction = shared_map.shortes_path[this.next_cell + 1] - shared_map.shortes_path[this.next_cell];
            // this.next_cell++;
            // this.next_pos = this.getPos(shared_map.shortes_path[this.next_cell]);
            // if (this.curr_direction == 7) {
            //     this.runAction(cc.animate(new cc.Animation(this.animationList[2],0.075,2)));
                
            // }
            // else if(this.curr_direction == -7){
            //     // this.moveDown(dt);
            // }
            // else if(this.curr_direction == 1){
                
            //     this.runAction(cc.animate(new cc.Animation(this.animationList[1],0.075,2)))
            // }
            // else{
            //     // this.moveLeft(dt);
            // }
            var curr_pos = this.next_pos;
            this.next_cell++;
            this.next_pos = this.getPos(this.path[this.next_cell]);
            if(curr_pos[1] == this.next_pos[1] && this.next_pos[0] - curr_pos[0] > 0){ // y bang nhau thi di sang phai
                this.curr_direction = 1;
                this.stopAllActions();
                this.runAction(cc.animate(new cc.Animation(this.animationList[1],this.delay_per_frame)).repeatForever());
            }
            else if (curr_pos[1] == this.next_pos[1] && this.next_pos[0] - curr_pos[0] < 0){ // Sang trai
                // this.setScaleX(-1*2);
                this.stopAllActions();
                this.curr_direction = -1;
            }
            else if (curr_pos[0] == this.next_pos[0] && this.next_pos[1] - curr_pos[1] > 0){ // Len tren
                this.curr_direction = 7; 
                this.stopAllActions();
                this.runAction(cc.animate(new cc.Animation(this.animationList[0],this.delay_per_frame)).repeatForever());
            }  
            else{
                this.curr_direction = -7; // xuong duoi
                this.stopAllActions();
                this.runAction(cc.animate(new cc.Animation(this.animationList[2],this.delay_per_frame)).repeatForever());
            }
            // log(this.curr_direction);
        }
    },

    moveUp:function(dt){
        this.y += this.speed*dt;
        if (this.y > this.next_pos[1]*MW.CELL.HEIGHT){
            this.changeDirection();
        }
    },

    moveDown:function(dt){
        this.y -= this.speed*dt;
        if (this.y < this.next_pos[1]*MW.CELL.HEIGHT){
            this.changeDirection();
        }
    },

    moveLeft:function(dt){
        this.x -= this.speed*dt;
        if (this.x < this.next_pos[0]*MW.CELL.WIDTH){
            this.changeDirection();
        }
    },

    moveRight:function(dt){
        this.x += this.speed*dt;
        if (this.x > this.next_pos[0]*MW.CELL.WIDTH){
            this.changeDirection();
        }
    },

    update:function(dt){
        // this.findPath();
        if (this.curr_direction == 7) {
            this.moveUp(dt);
        }
        else if(this.curr_direction == -7){
            this.moveDown(dt);
        }
        else if(this.curr_direction == 1){
            this.moveRight(dt);
        }
        else{
            this.moveLeft(dt);
        }


    },

    destroy:function(){
        this.unscheduleUpdate();
        this.stopAllActions();
        
        this.init();
    },

    run:function(){
        this.visible = true;

        this.findPath();
        this.scheduleUpdate();
        // this.changeDirection();
    },
});


Monster.getMonster = function(){
    if(MW.CONTAINER.MONSTER.length == 0){
        Monster.create();
    }
    for(var i = 0; i < MW.MONSTER.NUM; i++){
        if (MW.CONTAINER.MONSTER[i].visible == false){
            return MW.CONTAINER.MONSTER[i];
        }
    }
    return null;
}

Monster.create = function(){
    for(var i = 0; i < MW.MONSTER.NUM; i++){
        var p;
        if (i == 0){
            p = new DemonTree();
            MW.CONTAINER.MONSTER.push(p);
            shared_map.addChild(p);
            continue;
        }
        if (i == 1){
            p = new Giant();
            MW.CONTAINER.MONSTER.push(p);
            shared_map.addChild(p);
            continue;
        }
        if (i == 2){
            p = new Assasin();
            MW.CONTAINER.MONSTER.push(p);
            shared_map.addChild(p);
            continue;
        }
        if (i == 3){
            p = new Bat();
            MW.CONTAINER.MONSTER.push(p);
            shared_map.addChild(p);
            continue;
        }
        
        var k = randomIntFromInterval(1,4);
        if(k == 1){
            p = new Assasin();
        }
        else if (k == 2){
            p = new Bat();
        }
        else if (k == 3){
            p = new DemonTree();
        }
        else{
            p = new Giant();
        }
        shared_map.addChild(p);
        MW.CONTAINER.MONSTER.push(p);
    }
}

Monster.updateAllMonster = function(){
    for(var i = 0; i < MW.MONSTER.NUM; i++){
        MW.CONTAINER.MONSTER[i].findPath();

    }
}