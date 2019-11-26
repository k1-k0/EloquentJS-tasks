let map = {one: true, two: true, hasOwnProperty: true};
map[Symbol.hasOwnProperty] = function() {
    return this.hasOwnProperty;
}

console.log(map.hasOwnProperty);
// → true