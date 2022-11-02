var myApp = angular.module('productApp', []);
myApp.controller('productCtrl', function ($scope){
    var products = [
        {name: "Product 1", price: 15000000},
        {name: "Product 1", price: 15000000},
        {name: "Product 1", price: 15000000},
        {name: "Product 1", price: 15000000},
        {name: "Product 1", price: 15000000},
        {name: "Product 1", price: 15000000}
    ]
    $scope.products = products;
})