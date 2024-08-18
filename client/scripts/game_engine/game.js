//Imports


//World Mechanics



// Structure/Machines
class Structure {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        
    }
}

class Weapon extends Structure {
    constructor(x, y) {
        super(x, y);
    }
    draw(){
        
    }
}

class Movable {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }
    update() {
        let ax, ay;
    }
    draw() {
        
    }
}