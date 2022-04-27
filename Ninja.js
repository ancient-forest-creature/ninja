class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;

    }

    sayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStatus() {
        console.log("Ninja: ");
        console.log(`Name - ${this.name}`);
        console.log(`Health - ${this.health}`);
        console.log(`Speed - ${this.speed}`);
        console.log(`Strength - ${this.strength}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} sips sake and feels refreshed and revived`)
        return this;
    }
}

const Kiku = new Ninja("Kiku", 10)

Kiku.sayName().showStatus().drinkSake().showStatus();