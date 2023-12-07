var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
// Task 1
function logDairy(dairy_array)
{
    for(const log of  dairy_array)
    {
        console.log(log);
    }
}

logDairy(dairy);

// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(bird)
{
    for(const key of Object.keys(bird))
    {
        console.log(`${key}: ${bird[key]}`);
    }
}

birdCan(bird);

// Task 3

function animalCan(animal)
{
    for(const prop in animal)
    {
        console.log(`${prop}: ${animal[prop]}`);
    }
}

animalCan(bird);