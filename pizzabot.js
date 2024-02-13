const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert(`Hey! Happy to serve your pizza. 
On our menu we have ${pepperoni}, ${hawaiian} and ${vegetarian}`);

let orderName = prompt(
  "Enter the name of the pizza you want to order today. Choose between Hawaiian, Pepperoni or Vegetarian"
);

while (
  orderName !== vegetarian &&
  orderName !== hawaiian &&
  orderName !== pepperoni
) {
  alert(
    "Sorry, we don't have that sort of pizza on the menu. Choose between Hawaiian, Pepperoni or Vegetarian"
  );

  orderName = prompt(
    "Enter the name of the pizza you want to order today. Choose between Hawaiian, Pepperoni or Vegetarian"
  );
}

const orderQuantity = prompt(`How many of ${orderName} do you want?`);

let cookingTime;
if (orderQuantity >= 1 && orderQuantity <= 2) {
  cookingTime = 10;
} else if (orderQuantity >= 3 && orderQuantity <= 5) {
  cookingTime = 15;
} else {
  cookingTime = 20;
}

function orderTotal(orderQuantity){
  return orderQuantity * pizzaPrice;
}

const completeOrder = alert(
  `Great, I'll get started on your ${orderName}
      right away. It will take ${cookingTime}
       minutes to cook, and it will cost ${orderTotal}`
);

