class stone{
    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2,

        }
        
        this.x=x
        this.y=y
        this.r=40
        this.body=Bodies.circle(x,y,40,options);
        this.image=loadImage("images/stone.png")
        World.add(world,this.body)

    }
    display(){
        var p=this.body.position
        push();
        translate(p.x,p.y)
        imageMode(CENTER)
        image(this.image,p.x,p.y,this.r,this.r)
    }
}