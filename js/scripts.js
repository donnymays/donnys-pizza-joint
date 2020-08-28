function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = [];
}

PizzaOrder.prototype.pizzaTotal = function(toppingArr) {
  let toppingTotal = 0;
  for (i=0; i < toppingArr.length; i++) {
    toppingTotal += toppingArr[i];
  }
  let pizzaTotal = toppingTotal + this.size
  return pizzaTotal;
};



$(document).ready(function()  {
  $("#pizzaForm").submit(function (event) {
    event.preventDefault();
    
    let inputtedSize = parseInt($("input:radio[name=size]:checked").val());
    
    let pizzaOrdered = new PizzaOrder(inputtedSize);
    
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizzaOrdered.toppings.push(parseInt($(this).val()));
    });
    
    let orderTotal = pizzaOrdered.pizzaTotal(pizzaOrdered.toppings);
    
    $("span#totalPrice").append(orderTotal)

 
  });
});