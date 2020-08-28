function PizzaOrder(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

PizzaOrder.prototype.orderTotal = funtion() {
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