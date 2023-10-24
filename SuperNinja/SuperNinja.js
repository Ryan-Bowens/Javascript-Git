class Ninja {
    constructor(name, health = "90", speed = "3", strength = "3") {
        this.name = name;
        this.health = health
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`${this.name} is your chosen ninja.`)
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`)
    }
    drinkSake(){
        console.log(`${this.name} drank sake! +10 Health!`)
        this.health += 10
        return this
    }
}

class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom = "10"){
        super(name)
        this.health = health
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}, Wisdom: ${this.wisdom}`)
    }
}
const sublime = new Ninja("Sublime")
sublime.showStats()
const ultima = new Sensei("Ultima", 180, 6, 6)
ultima.showStats()
ultima.drinkSake()
ultima.speakWisdom()