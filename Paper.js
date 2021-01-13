class Paper
{
    constructor(x, y, radius)
    {
        var options=
        {
            restitution:0.3,
            isStatic:false,
            density:1.2,
            friction:0.0
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x, this.y,( this.radius-20)/2, options);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image,0,0, this.radius);
        pop();
    }
}