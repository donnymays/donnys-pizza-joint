function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.total = this.pizzaTotal();
}

PizzaOrder.prototype.pizzaTotal = function() {
  let defaultPizza = 10;
  if (this.size === "Medium") {
    defaultPizza += 2
  } if (this.size === "Large") {
    defaultPizza += 5
  } if (this.size === "MEGAPIZZA") {
    defaultPizza += 10
  } if (this.toppings === "pepperoni") {
    defaultPizza += 2
  } if (this.toppings === "sausage") {
    defaultPizza += 3
  }if (this.toppings === "mushroom") {
    defaultPizza += 4
  }
  return defaultPizza;
 
};


$(document).ready(function()  {
  $("pizzaForm").submit(function (event) {
    event.preventDefault();
    


    let inputtedSize = $("size").val();
    let inputtedTopping = $("topping").val();
    console.log(inputtedSize, inputtedTopping);
    let newPizza = new PizzaOrder(inputtedSize, inputtedTopping);
    console.log(newPizza);
   

    $("#totalPrice").text(defaultPizza);

 
  });
});

 // let size = parseInt($("sizeSelect")).val();
    // let pizza = new PizzaOrder(size, toppings);
    // let toppings = [];
    
    // $("input:checkbox[name=toppings]:checked").each(function() {
    //   pizza.toppings.push(parseInt($(this).val()));
    //   alert(pizza.toppings);
    // });
    
    // let pizzaPrice = pizza.pizzaTotal(toppings);
    // console.log(pizzaPrice);