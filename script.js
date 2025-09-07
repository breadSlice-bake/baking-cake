const egg = document.getElementById("egg");
const flour = document.getElementById("flour");
const shoe = document.getElementById("shoe");
const van = document.getElementById("vanilla");
const choc = document.getElementById("chocolate");
const duck = document.getElementById("duck");
const pep = document.getElementById("pepper");
const sugar = document.getElementById("sugar");
const bread = document.getElementById("breadSlice");
const result = document.getElementById("result");
const message = document.getElementById("resultMessage");

function bake() {

let totalChecked = 0;
if (egg.checked) totalChecked++;
if (flour.checked) totalChecked++;
if (shoe.checked) totalChecked++;
if (van.checked) totalChecked++;
if (choc.checked) totalChecked++;
if (duck.checked) totalChecked++;
if (pep.checked) totalChecked++;
if (sugar.checked) totalChecked++;
if (bread.checked) totalChecked++;

const resOne = (egg.checked && flour.checked && choc.checked && sugar.checked && totalChecked===4);
const resTwo = (egg.checked && flour.checked && van.checked && sugar.checked && totalChecked===4);
const resFun = (sugar.checked && bread.checked && totalChecked===2);
const resPlain = (egg.checked && flour.checked && sugar.checked && totalChecked===3);
const cooked = (duck.checked && totalChecked ===1)

if (resOne){
result.src = "https://images.icon-icons.com/4045/PNG/512/cake_chocolate_icon_256944.png";
message.innerHTML = "a Chocolate cake, my favourite, you can have one slice.";
result.alt = "a chocolate cake";
}
else if (resTwo) {
result.src = "https://images.icon-icons.com/3964/PNG/512/candles_party_bakery_restaurant_and_food_cake_birthday_icon_251545.png";
message.innerHTML = "Wow a vanilla cake... how.. vanilla.";
result.alt = "a vanilla cake";
}
else if (resFun){
result.src = "https://images.icon-icons.com/3964/PNG/512/meal_bread_breakfast_food_and_restaurant_icon_251537.png";
message.innerHTML = "Bread is the true cake!";
result.alt = "a baked bread"
  /* Here lies the mighty breadSlice
  ____████████████████████____
__██░░░░░░░░░░░░░░░░░░░░██__
██░░░░░░██░░░░░░░░░░░░░░░░██
██░░██░░░░░░░░░░░░░░░░░░░░██
__██░░░░░░██░░░░░░░░░░░░██__
____██░░░░░░░░██░░░░░░██____
____██░░░░░░░░░░░░░░░░██____
____██░░██░░░░░░░░░░░░██____
____██░░░░░░░░░░░░░░░░██____
____██░░░░██░░░░░░░░░░██____
____██░░░░░░░░░░░░░░░░██____
____████████████████████____
*/
}
else if (cooked){
result.src = "https://raw.githubusercontent.com/breadSlice-bake/duck-image/main/Cooked%20Duck.png"
message.innerHTML = "Its not cake, but it looks good.";
result.alt = "picture of cooked duck";
}
else if (resPlain){
result.src = "https://images.icon-icons.com/1447/PNG/512/32421birthdaycake_98921.png";
message.innerHTML = "Plain old cake, well done!";
result.alt = "a plain cake";
}
else {
result.src = "https://images.icon-icons.com/3447/PNG/512/fire_city_burn_burning_war_icon_219252.png";
message.innerHTML = "You might want to think a bit longer";
result.alt = "buildings";
}
}
