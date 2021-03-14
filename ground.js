class Ground{

    constructor(){
        var ground_options = {
            isStatic : true
        }
        this.ground=Bodies.rectangle(400,390,400,20,ground_options);
        World.add(world.this.ground);
    }
display(){
    Stroke(4);
    fill(188,67,67);
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,300,20);
}
}