class Can{
    constructor(x, y, w, h, image){
        var options = {
            isStatic: true
        }
        this.image = loadImage("trashcan.png");
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    } 
    display(){
    var pos = this.body.position;
    rect(pos.x, pos.y, this.w, this.h);
    }
}