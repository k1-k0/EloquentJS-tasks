class PGroup {
    constructor(group) {
        this.group = group || [];
    }

    add(element) {
        let newGroup = Array.from(this.group.concat(element));
        return new PGroup(newGroup);
    }

    delete(element) {
        return new PGroup(this.group.filter( value => value != element));
    }

    has(element) {
        return this.group.includes(element);
    }

    static get empty() {
        return new PGroup();
    }
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false