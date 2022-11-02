var myApp = angular.module('productApp', []);
myApp.controller('productCtrl', function ($scope){
    var products = [
        {name: "Product 1",category: "Smart Phone",status:1, price: 15000000},
        {name: "Product 1",category: "Smart Phone",status:0, price: 15000000},
        {name: "Product 1",category: "Smart Phone",status:1, price: 15000000},
        {name: "Product 1",category: "Smart Phone",status:1, price: 15000000},
        {name: "Product 1",category: "Smart Phone",status:0, price: 15000000},
        {name: "Product 1",category: "Smart Phone",status:0, price: 15000000}
    ]
    $scope.products = products;
    $scope.addProduct = function(){
        $scope.products.push($scope.newProduct);
        $scope.newProduct = {};
        $scope.message = "New product added successful!";
    };
    $scope.editProduct = function(){
        $scope.message = "Edit product information sucessfuly!";
    };
    $scope.selectProduct = function(product){
        console.log(product);
        $scope.clickedProduct = product;
    };
    $scope.deleteProduct = function(){
        $scope.products.splice($scope.products.indexOf($scope.clickedProduct), 1);
        $scope.message = "Product deleted successful!";
    };
    $scope.clearMessage = function(){
        $scope.message = "";
    };
})
myApp.filter('status', function (){
    return function (input) {
        if (input == 0) return "Not Active";
        if (input == 1) return "Active";
    }
});