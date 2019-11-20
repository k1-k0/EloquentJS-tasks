const deepEqual = (lobj, robj) => {
    if(typeof lobj === "object"
    && typeof robj === "object"
    && lobj !== null
    && robj !== null) {
        for(let field of Object.keys(lobj)) {
            return deepEqual(lobj[field], robj[field]);
        }
    } else {
        return lobj === robj;
    }
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true