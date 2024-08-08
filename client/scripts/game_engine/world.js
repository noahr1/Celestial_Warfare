

class Planet {
    constructor() {
        this.cells = [];
    }

    draw() {

    }
}

class Asteroid {
    constructor() {

    }
}

class Debris {
    constructor() {

    }
}

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    update(dt) {
        
    }
    draw() {
        circle(this.x, this.y, 5);
    }
}