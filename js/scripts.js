function PizzaOrder(size, toppings, totalPrice) {
  this.size = size;
  this.toppings = [];
  this.totalPrice = totalPrice;
}

PizzaOrder.prototype.pizzaTotal = function(toppingArr) {
  let toppingTotal = 0;
  for (i=0; i < toppingArr.length; i++) {
    toppingTotal += toppingArr[i];
  };
  this.totalPrice = toppingTotal + this.size
  return this.totalPrice;
};

$(document).ready(function()  {
  $("#second-pizza").on("click", function () {
    $("#second-pizza-form").toggle();
  });
  $("#order-button").click(function (event) {
    event.preventDefault();
  
    let inputtedAddress = $("input#address").val();
    let inputtedName = $("input#name").val();
    let inputtedSize = parseInt($("input:radio[name=size]:checked").val()) + parseInt($("input:radio[name=size2]:checked").val()); 
    let pizzaOrdered = new PizzaOrder(inputtedSize);
    
    $("input#address").val("");
    $("input#name").val("");
    
    $("input:checkbox[name=toppings]:checked").each(function(){
      pizzaOrdered.toppings.push(parseInt($(this).val()));
    });
    
    pizzaOrdered.totalPrice = pizzaOrdered.pizzaTotal(pizzaOrdered.toppings);
    
    $("span#order-name").text(inputtedName);
    $("span#totalPrice").text(pizzaOrdered.totalPrice);
    $("span#delivery-address").text(inputtedAddress);
  });
});