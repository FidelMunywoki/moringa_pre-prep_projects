var bun =true;
var patty = true;
var cheese = true;
var veggie = true;
var mayonnaise = false;
var ketchup = true;

var order = bun && patty && veggie && (ketchup || mayonnaise);
var happyCustomer = order;
console.log(happyCustomer);