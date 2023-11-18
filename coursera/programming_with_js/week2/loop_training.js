
console.log("Task1");
for(var i=1; i<=5; i++)
{
    console.log(i);
}
console.log("Counting Completed");

console.log("\nTask2");
for(var i=5; i>0; i--)
{
    console.log(i);
}
console.log("Countdown finished");

console.log("\nTask3");

var counter = 0;

while(counter++<5)
{
    console.log(counter);
}
console.log("Counting completed");

console.log("\nTask4");

counter = 6;
while(counter-->1)
{
    console.log(counter);
}

console.log("Countdong completed");

console.log("\nTask5");
var starting_year = 2018;
for(var i=0; i<5; i++)
{
    console.log(starting_year+i);
}

console.log("\nTask6");
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
for (var i = 0; i < cubes.length; i++) {
    console.log("%c" + cubes[i], styles)
}