var myApp = angular.module('productApp', []);
myApp.controller('productCtrl', function ($scope){
    var products = [
        {name: "Xiaomi 12T Pro",category: "Smart Phone",status:1, price: 16990000},
        {name: "Laptop Asus Gaming Rog Strix G15 G513IH HN015W",category: "Laptop",status:0, price: 18690000},
        {name: "Apple Mac mini M1 256GB 2020",category: "Laptop",status:1, price: 17990000},
        {name: "iPhone 14 Pro 128GB",category: "Smart Phone",status:1, price: 30990000},
        {name: "Samsung Galaxy S22 Ultra (8GB - 128GB)",category: "Smart Phone",status:0, price: 24890000},
        {name: "ASUS ROG Phone 6 16GB 512GB",category: "Smart Phone",status:0, price: 24240000}
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