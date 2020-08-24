class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true  
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        if (this.body.speed < 3){
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width, this.height); 
          }
          else {
            World.remove(world, this.body);
            //push();
            //this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            /*translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);*/
            rect(0,0,this.width, this.height); 
            //pop();
          }
          pop(); 
      }
      score(){
        if(this.Visibility<0 && this.Visibility > -105){
          score++;
        }
      } 
}