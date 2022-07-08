class Bomb {
    constructor(x, y,r) {

        var options ={
            restitution:0.03,
            airFriction: 2
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this. image = loadImage("bomb.png")
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
       
        
        
        image(this.image, 0, 0, this.r,this.r);
        pop();
    }

};