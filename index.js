// Your code here
class Animal {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Cat extends Animal {
    constructor(name, sex) {
        super(name, sex);
    }

    speak() {
        return `${this.name} says meow!`
    }
}

class Dog extends Animal {
    constructor(name, sex) {
        super(name, sex);
    }

    speak() {
        return `${this.name} says woof!`
    }
}

class Bird extends Animal {
    constructor(name, sex) {
        super(name, sex);
    }

    speak() {
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`
        }
        return `${this.name} says squawk!`
    }
}