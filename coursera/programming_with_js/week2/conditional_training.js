var age = 10;

if(age >= 65)
{
    console.log("You get your income from your person");
}
else if(age >= 18 && age <65)
{
    console.log("Each month you get a salary");
}
else if(age < 18)
{
    console.log("You get an allowance");
}
else{
    console.log("The value of the age variable is not numerical");
}


var day = "Sunday";

switch(day)
{
    case "Monday":
        console.log("Do something");
        break;
    case "Tuesday":
        console.log("Do something");
        break;
    case "Wednesday":
        console.log("Do something");
        break;
    case "Thursday":
        console.log("Do something");
        break;
    case "Friday":
        console.log("Do something");
        break;
    case "Saturday":
        console.log("Do something");
        break;
    case "Sunday":
        console.log("Placticing");
        break;
    default:
        console.log("There is no such day");
}