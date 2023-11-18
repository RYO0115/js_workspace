var clothes = [];

console.log(clothes);

clothes.push("TShirt");
console.log("Push:",clothes);
clothes.push("Jacket");
console.log("Push:",clothes);
clothes.push("Jersey");
console.log("Push:",clothes);
clothes.push("Shoes");
console.log("Push:",clothes);
clothes.push("Pants");
console.log("Push:",clothes);

var popped_cloth = clothes.pop();
console.log("\nPop:", clothes, " Popped Cloth:", popped_cloth);


console.log("\n Third item is:", clothes[2]);



var favCar = {}

favCar.color = "blue";
favCar.covertibale=true;

console.log("\n", favCar);

favCar.key = false
favCar.engineRunning = false;

favCar.turnEngine = function(){
    console.log("engine running");
    key = true;
    engineRunning = true;
    //return(key, engineRunning);
}


//(favCar.key, favCar.engineRunning) = favCar.turnEngine();
favCar.turnEngine();

console.log("\n Turn Engine On:", favCar);

