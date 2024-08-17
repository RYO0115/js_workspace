


var dishData = [
    {
        "name":"Italian pasta",
        "price":9.55,
        "tax":0.2,
    },
    {
        "name":"Rice with vegies",
        "price":8.65,
        "tax":0.2
    },
    {
        "name":"Chicken with potatoes",
        "price":15.55,
        "tax":0.2
    },
    {
        "name":"Vegetarian Pizza",
        "price":6.45,
        "tax":0.2
    }
];

function getPrices(taxBoolean){

    for(dish of dishData)
    {
        var finalPrice;
        if(taxBoolean === true){
            finalPrice = dish["price"] * (1.0 + dish["tax"]);
        }
        else if(taxBoolean === false){
            finalPrice = dish["price"];
        }
        else{
            console.log("You need to pass a boolean to the get Prices call");
            return;
        }

        //console.log("Dish: ", dish["name"], "Price: $", finalPrice);
        console.log(`Dish: ${dish["name"]} Price: ${finalPrice}`);
    }
};

function getDiscount(taxBoolean, guests){
    getPrices(taxBoolean);

    if(isNaN(guests)== false && 0 < guests && guests < 30)
    {
        var discount = 0;
        if(guests < 5)
        {
            discount = 5;
        }
        else if(guests >= 5)
        {
            discount = 10;
        }
        console.log(`Discount is: ${discount}`);
    }
    else{
        console.log("The second argument must be a number between 0 and 30");
    }

}

module.exports.getPrices = getPrices;
module.exports.getDiscount = getDiscount;


getDiscount(true, 2);
getDiscount(false, 10);
getDiscount(true, 40);
getDiscount();