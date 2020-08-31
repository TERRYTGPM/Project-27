class Bob{
    constructor(x, y, radius){

            var options = {
                density:1.2,
                isStatic: false,
                restitution:0.3,
                friction:0.5
            }
            
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
        }
    display(){
        push();
        circle(this.body.position.x, this.body.position.y, this.radius);
        pop();
    }
}