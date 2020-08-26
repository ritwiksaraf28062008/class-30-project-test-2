class Dustbin {
    constructor(x,y,w,h) {
        var options = {
            friction:0.5,
            restitution: 0.3,
            isStatic:false,
            density:0.2 
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.image = loadImage("dustbin.png")
        World.add(world, this.body);
        this.width = w;
        this.height = h;
        this.body.addImage = this.image;      
    }

    
    display(){
    var pos =this.body.position;
    if(this.body.speed < 3){
        rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y,this.width,this.height);
      image(this.image , pos.x, pos.y,this.width,this.height);
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      }

      score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
    
    

    
}