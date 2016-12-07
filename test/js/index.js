var init = function() {
  var user = new User(123456,"Fulano");
  console.log(user.getName());

  var product1 = new Product("Coca-cola", "bebida", 5.50);
  Sale.addProduct(product1);

  var product2 = new Product("Pepsi", "bebida", 4.90);
  Sale.addProduct(product2);

  console.log(product1.getName());
  console.log(product2.getName());

  console.log("Total: " + Sale.totalOfItens() + " Price Total: " + Sale.saleTotal());

  console.log("rulesEngine: " + RuleEngine);
};

window.addEventListener("pageshow", init);
