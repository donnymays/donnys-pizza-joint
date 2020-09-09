function PizzaOrder(size, toppings, totalPrice) {
  this.size = size;
  this.toppings = [];
  this.totalPrice = totalPrice;
}

PizzaOrder.prototype.pizzaTotal = function() {
  let toppingTotal = 0;
  for (i=0; i < this.toppings.length; i++) {
    toppingTotal += this.toppings[i];
  };
  this.totalPrice = toppingTotal + this.size
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
    
    pizzaOrdered.pizzaTotal();
    
    $("span#order-name").text(inputtedName);
    $("span#totalPrice").text(pizzaOrdered.totalPrice);
    $("span#delivery-address").text(inputtedAddress);
  });
});

// //In .pizzaTotal(), there is no need to return this.totalPrice, because you can access it through the pizzaOrdered object instance (like you do on line 38).
// On line 35, you should not set your totalPrice property with the returned value from calling .pizzaTotal() because you already set the value of that property in .pizzaTotal() on line 12.
// On lines 35 when calling .pizzaTotal(), you should not pass in pizzaOrdered.toppings. You can access that property from within the .pizzaTotal() method by calling this.toppings. Please update .pizzaTotal() and line 35 accordingly