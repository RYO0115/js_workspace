
const car = {
    speed: 100,
    color: "blue"
}

//----------------------for of -------------------------------//

// Objectの要素にfor文でアクセスはできない。
//for(prop of car)
//{
//    console.log(prop);
//}

//だけど、keysというメソッドを使えばアクセスできる

console.log(Object.keys(car));

for(var prop of Object.keys(car))
{
    console.log(prop);
}

//ただしKeysはあくまで要素の名前で中身ではない。
// 中身はValues()メソッドを使う

console.log(Object.values(car));
for(var value of Object.values(car))
{
    console.log(value);
}

// KeyとValueの両方を取り出すのにはentries()メソッドを使う

console.log(Object.entries(car));
for(var key_values of Object.entries(car))
{
    console.log(key_values);
}

// もちろん配列であれば問題無し
const colors = ["red", "orange", "yellow"];
for (var color of colors)
{
    console.log(color);
}


var clothingItem = {
    price: 50,
    color: "beige",
    material: "cotton",
    season: "autumn"
}

for(const key of Object.keys(clothingItem))
{
    console.log(key, ":", clothingItem[key]);
}

function testBracketsDynamicAccess() {
  var dynamicKey;
  if(Math.random() > 0.5) {
    dynamicKey = "speed";
   }else{
     dynamicKey = "color";
   }

    var drone = {
      speed: 15,
      color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();

//------------------------for in----------------------------//

for(prop in car)
{
    console.log(prop, ":", car[prop]);
    //console.log(car[prop]);
}

const car2 = {
    engine: true
}

const sportsCar = Object.create(car2);
sportsCar.speed = "fast";
console.log("The sportsCar object:", sportsCar);

console.log("for-inだと全ての要素にアクセスできる");

for(prop in sportsCar)
{
    console.log(prop,":",sportsCar[prop]);
}

console.log("しかし、keysメソッドを使うと継承元の要素は出てこない");

for(prop of Object.keys(sportsCar))
{
    console.log(prop,":",sportsCar[prop]);
}
