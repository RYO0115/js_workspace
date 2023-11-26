class Train{
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }

    lightsStatus(){
        console.log("Lights On? : ", this.lightsOn);
    }

    getSelf(){
        console.log(this);
    }

    getProtoType(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
        return(proto);
    }
}

var myTrain = new Train("red", true);

myTrain.toggleLights();
myTrain.lightsStatus();
myTrain.getSelf();
copyTrain = myTrain.getProtoType();

console.log("Copy Proto Train:", copyTrain);

class HighSpeedTrain extends Train
{
    constructor(passenger, highSpeedOn, color, lightsOn)
    {
        super(color, lightsOn);
        this.passenger = passenger;
        this.highSpeedOn = highSpeedOn;
    }

    toggleHighSpeeds(){
        this.highSpeedOn = !this.highSpeedOn;
        this.showHighSpeedStatus();
    }

    showHighSpeedStatus(){
        console.log("High Speed Status:", this.highSpeedOn);
    }

    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log("Lights are operational");
    }
}

var s_train = new HighSpeedTrain(200, false, "blue", false);

s_train.toggleLights();
s_train.toggleHighSpeeds();
