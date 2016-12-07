var addDependencie = function(url){
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.src = url;
  head.appendChild(script);
};

var main = function() {
  var user = "js/user.js";
  var product = "js/product.js";
  var Sale = "js/sale.js";
  addDependencie(user);
  addDependencie(product);
  addDependencie(Sale);
};

document.onload = main();
