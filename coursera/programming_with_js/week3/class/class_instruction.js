class Animal{
    constructor(name){
        this.name = name;
    }

    GetName(){
        return(this.name);
    }
}

class Bicycle{
    Bell(){
        console.log("Ring, Ring. Move out!!");
    }
}

class Door{
    Bell(){
        console.log("Ring, Ring. Someone is here");
    }
}

function ringTheBell(thing){
    thing.Bell();
}

var bike = new Bicycle();
var door = new Door();

ringTheBell(bike);
ringTheBell(door);

class Bird {
    useWings() {
        console.log("Flying!")
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
