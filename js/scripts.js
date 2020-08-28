function PizzaOrder(toppings, size) {
  this.toppings = [];
  this.size = size;
  this.total = this.pizzaTotal();
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
 
    let size = parseInt($("sizeSelect")).val();
    let pizza = new PizzaOrder(size, toppings);
    let toppings = [];
    
    $("input:checkbox[name=toppings]:checked").each(function() {
      pizza.toppings.push(parseInt($(this).val()));
      alert(pizza.toppings);
    });
    
    let pizzaPrice = pizza.pizzaTotal(toppings);
    console.log(pizzaPrice);

    $("#totalPrice").append(pizzaPrice);

 
  });
});