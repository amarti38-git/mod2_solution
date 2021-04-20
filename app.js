(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemsToBuy = this;

  itemsToBuy.itemList = ShoppingListCheckOffService.getToBuyItems();

  itemsToBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItems = this;

  boughtItems.itemList = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
    var service = this;
  
    // List of items
    var toBuyItems = [
        {
          name: "cookies",
          quantity: "10"
        },
        {
          name: "donuts",
          quantity: "5"
        },
        {
          name: "cakes",
          quantity: "2"
        },
        {
          name: "chocolates",
          quantity: "20"
        },
        {
          name: "sweets",
          quantity: "10"
        }
      ];
      
    var boughtItems = [];
  
    service.buyItem = function (itemIndex) {
      var item = toBuyItems[itemIndex];
      boughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
    };
  
    service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
        return boughtItems;
      };
}

})();