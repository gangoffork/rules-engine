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

  var condition = function(sale) {
    return (Sale.saleTotal()>=10);
  };

  var action = function(sale) {
    console.log("10% de desconto." + (sale.saleTotal() - (sale.saleTotal()*0.1)) );
  };

  var salesOff = "salesOff";

  var ruledesconto = new RuleEngine.Rule(Sale, condition, action, salesOff);
  RuleEngine.addRule(ruledesconto);
  RuleEngine.run();
};

window.addEventListener("pageshow", init);
