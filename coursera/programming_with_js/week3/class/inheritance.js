var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);

console.log(eagle1);
console.log("Has wings? : ",eagle1.hasWings);
console.log("Has Feathers? : ",eagle1.hasFeathers);
console.log("Can fly? : ",eagle1.canFly);

var penguin1 = Object.create(bird);

penguin1.canFly = false;

console.log(penguin1);