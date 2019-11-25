function Rabbit(type) {
    this.type = type;
    this.speak = (line) => {
        console.log(`${this.type} rabbit say ${line}`);
    };
}

let white = new Rabbit('white');
white.speak('Hi');
white.b = 5;

console.log(white.b);
console.log(Object.getPrototypeOf(Rabbit));