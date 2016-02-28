var myApp = angular.module('myApp', ['ngRoute'])
myApp.config(function ($stateProvider, $routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'homeController'
        });
});

myApp.controller('HomeController', function ($scope) {
    string s = "232";

});