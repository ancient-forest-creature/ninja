class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed
        this.strength = strength;

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
        console.log(`${this.name} sips sake and feels refreshed and revived`);
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10
    }

    speakWisdom() {
        console.log("To see the world as it is, you must make your internal model of the world subordante to reality");
        return this;
    }
}

const Kiku = new Ninja("Kiku", 150);

Kiku.sayName().showStatus().drinkSake().showStatus();

const Nathan = new Sensei("Nathan");

Nathan.sayName().showStatus().speakWisdom().drinkSake().drinkSake().drinkSake().showStatus();