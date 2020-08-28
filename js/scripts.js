function PizzaOrder(toppings, size) {
  this.toppings = [];
  this.size = size;
}

PizzaOrder.prototype.pizzaTotal = function(toppingArr) {
  let toppingTotal = 0
  for (i=0; i<toppingArr.length; i++) {
    toppingTotal += toppingArr[i];
  }
  let pizzaTotal = toppingTotal + this.size;
  return pizzaTotal;
}





$(document).ready(function()  {
  $("pizzaForm").submit(function (event) {
    event.preventDefault();
 

    $("#totalPrice").append();

 
  });
});