function PizzaOrder(toppings, size) {
  this.toppings = [];
  this.size = size;
}

PizzaOrder.prototype.sizeTotal = function() {
  let basePrice = 12;
  if (this.size === "Medium") {
    basePrice += 3;
  } if (this.size === "Large") {
    basePrice += 6;
  } if (this.size === "MEGA PIZZA") {
    basePrice += 10;
  }
  return basePrice;
}

PizzaOrder.prototype.toppingsTotal = function(toppingsArr){
  let toppingsPrice = 0;
  for (i=0; i<toppingsArr.length; i++) {
    toppingsPrice += toppingsArr[i];
  }
  return toppingsPrice
}




$(document).ready(function () {
  $("pizzaForm").submit(function (event) {
    event.preventDefault();
 
    function addToppings() {
      $("input:checkbox[name=toppings]:checked").each(function(){
        PizzaOrder.toppings.push(parseInt($(this).val()));
      });

    $("#totalPrice").append(pizzaTotal);



  });
});