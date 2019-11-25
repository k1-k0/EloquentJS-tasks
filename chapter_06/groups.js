class Group {
    constructor(container) {
        this.container = container || []
    }

    add(member) {
        if(!this.container.includes(member)) {
            this.container = this.container.push(member);
        }
    }

    delete(member) {
        this.container = this.container.filter( value => value !== member );
    }

    has(member) {
        const index = this.container.indexOf(member);
        return (index !== -1);
    }

    static from(array) {
        return new Group(Array.from(array));
    }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false