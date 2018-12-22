'use strict';
(function () {
  function Phone(brand, price, color, size) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.size = size;
  }

  Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". It is " + this.size + " centimeters tall.");
  }

  var samsungS6 = new Phone("Samsung", 1500, "gold", 14.3);
  var iPhone6S = new Phone("Apple", 2400, "silver", 13.8);
  var onePlusOne = new Phone("OnePlus", 1400, "black", 15.3);

  samsungS6.printInfo();
  iPhone6S.printInfo();
  onePlusOne.printInfo();
})();
