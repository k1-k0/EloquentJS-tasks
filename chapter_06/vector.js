class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.pow( Math.pow(this.x, 2) + Math.pow(this.y, 2), .5 )
    }

    plus(otherVector) {
        return new Vec(this.x + otherVector.x, this.y + otherVector.y);
    }

    minus(otherVector) {
        return new Vec(this.x - otherVector.x, this.y - otherVector.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5