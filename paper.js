class paper {
    constructor(xpos,ypos, radius)
    {
    var box_options= {
    restitution:0.3,
    friction:0.5,
    isStatic:false,
    density:0.7
    }
    this.r=radius;
    this.y=ypos;
    this.x=xpos;

    this.body = Bodies.circle(this.x,this.y,this.r/2,box_options);
    World.add(world,this.body);
    
    this.image= loadImage("ball.png")
    
    
   }

   display()
   {
    var position= this.body.position;

    push();
    //translate(position.x,position.y)
    //fill("pink")
    //ellipse(0,0,this.r,this.r)
    image(this.image,position.x,position.y-30,this.r,this.r)
    pop();
   }
}
