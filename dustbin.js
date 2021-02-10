class dustbin {
    constructor(xpos, ypos, width, height)
    {
       var options = {isStatic:true}
    this.body = Bodies.rectangle(xpos,ypos,width,height,options);
    World.add(world,this.body);
    
    this.width= width;
    this.height= height;
    this.image= loadImage("dustbingreen.png")
    }

   display()
   {
    push()
    //rectMode(CENTER)
    //fill("white")
    var position= this.body.position;
    image(this.image,position.x-110,position.y-105,this.width+120,this.height+120)
    pop()
   }
}