let map = {one: true, two: true, hasOwnProperty: true};

// 1st approach:
map[Symbol.hasOwnProperty] = function() {
    return this.hasOwnProperty;
}

// 2nd approach:
// Object.prototype.hasOwnProperty(map, () => this.hasOwnProperty);


console.log(map.hasOwnProperty);
// → true