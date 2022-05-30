var Monster = cc.Sprite.extend({
    next_pos: null,
    next_cell: null,
    speed: null,
    curr_direction: null,

    animationList: null,

    ctor:function(){
        this._super(MW.MONSTER.ASSASIN.PNG);

        this.animationList = [];

        for (var i = 0; i <= 4; i+=2){
            var frames = [];
            for(var j = 0; j <= 9; j++){
                var monster = cc.spriteFrameCache.getSpriteFrame("monster_assassin_run_00" + i + j + ".png");
                frames.push(monster);
            }
            var animation = new cc.Animation(frames, 0.1);
            var animate = cc.animate(animation);
            this.animationList.push(animate);
        }

        this.init();
        
    },

    init:function(){
        this.speed = MW.MONSTER.ASSASIN.SPEED;
        this.next_cell = 0;
        this.next_pos = this.getPos(shared_map.shortes_path[this.next_cell]);
        this.changeDirection();
        this.attr({
            x: 0,
            y: 0,
            anchorX: 0,
            anchorY: 0,
            scale: MW.MONSTER.ASSASIN.SCALE,
            visible: true,
        });

        this.runAction(this.animationList[2]);
        this.scheduleUpdate();
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

    changeDirection:function(){
        
        if (this.next_cell == shared_map.shortes_path.length - 1){
            this.unscheduleUpdate();
        }
        else {
            this.curr_direction = shared_map.shortes_path[this.next_cell + 1] - shared_map.shortes_path[this.next_cell];
            this.next_cell++;
            this.next_pos = this.getPos(shared_map.shortes_path[this.next_cell]);
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
    }
});