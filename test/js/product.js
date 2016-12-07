var Product = function(name, type, price) {
  this.name = name;
  this.type = type;
  this.price = price;
};
Product.prototype.getName = function(){
  return "Product name: " + this.name + " type: " + this.type + " price: " + this.price;
};
