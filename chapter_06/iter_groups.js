// Your code here (and the code from the previous exercise)
class Group {
    constructor(container) {
        this.container = container || [];
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

class GroupIterator {
    constructor(group) {
        this.group      = group;
        this.iterator   = 0;
    }
    
    next() {
        if (this.iterator === this.group.container.length)
            return { done: true };
        
        let value = this.group.container[this.iterator];
        ++this.iterator;
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
  // → a
  // → b
  // → c