class Box{

    constructor(x,y,width,height){

        var op1= {

            restitution:0.8
            
            }

        this.box = Bodies.rectangle(x,y,width,height,op1);
        this.width=width
        this.height=height
        World.add(world,this.box);

    }

    display(){
        var pos= this.box.position;
        push();
        translate(pos.x,pos.y)
        rotate(this.box.angle)
        rectMode(CENTER);
        fill("orange");
        stroke("yellow")
        strokeWeight(3)
        rect(0,0,this.width,this.height);
        pop();



    }
    












}