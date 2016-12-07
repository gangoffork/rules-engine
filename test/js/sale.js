var Sale = (function () {
  // A private variable.
  var productList = [];

  // A private method.
  var calculateTotal = function() {
    var i = 0;
    var total = 0;
    for (; i < productList.length; i++) {
      total += productList[i].price;
    }
    return total;
  };

  return {
    // A public method.
    addProduct: function(product) {
      productList.push(product);
    },
    // A public method.
    removeProduct: function(product) {
      var index;
      var numToremove = 1;
      index = productList.indexOf(product);
      productList.splice(index, numToremove);
    },
    // A public method.
    totalOfItens: function() {
      return productList.length;
    },
    // A public method.
    saleTotal: function() {
      return calculateTotal();
    }
  };

})();
