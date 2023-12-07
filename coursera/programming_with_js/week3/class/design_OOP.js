class Animal 
{
    constructor( color = "yellow", energy=100, sound="...")
    {
        this.color = color;
        this.energy = energy;
        this.energy_status = ["decrease", "no change", "increase"]
        this.sound = sound;
    }

    checkActiveStatus()
    {
        if(this.energy > 0)
        {
            this.active();
        }
        else{
            this.sleep();
        }
    }

    getColor(){
        return(this.color);
    }

    makeSound(){
        console.log(this.sound);
    }

    active()
    {
        this.updateEnergy(-20);
    }

    sleep()
    {
        this.updateEnergy(20);
    }

    updateEnergy(update_amount)
    {
        this.energy += this.updateEnergy;
        this.showEnergyStatus(update_amount);
    }

    showEnergyStatus(energy_control)
    {
        var status = this.energy_status[0];
        if(energy_control>0)
        {
            status = this.energy_status[2];
        }
        else if (energy_control == 0)
        {
            status = this.energy_status[1];
        }
        else{
            // do nothing
        }

        console.log("Energy is ", status, "currently at:", this.energy);
    }
}

class Cat extends Animal
{
    constructor(special_sound="...", sound="purr", canJumpHigh= true, canClimbTrees = true, color, energy)
    {
        this.special_sound = special_sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
        super.sound = sound;
        super.color = color;
        super.energy = energy;
    }

    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.special_sound);
    }

}

class Bird extends Animal
{
    constructor( special_sound="...", canSpeak = "false", sound = "chirp", canFly = true, color, energy)
    {
        this.special_sound = special_sound;
        this.canSpeak = false;
        this.canFly = canFly;

        super.sound = sound;
        super.color = color;
        super.energy = energy;
    }

    makeSound(option)
    {
        if(option){
            super.makeSound();
        }
        if(this.canSpeak){
            console.log("I can talk");
        }

        console.log(this.special_sound);
    }
}

class HouseCat extends Cat
{
    constructor(houseCatSound="meow", sound, canJumpHigh, canClimbTrees, color, energy)
    {
        super( houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy);
    }
}

class Tiger extends Cat{
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy)
    {
        super( tigerSound, sound, canJumpHigh, canClimbTrees, color, energy);
    }
}




