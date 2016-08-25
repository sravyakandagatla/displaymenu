var MyApp = angular.module("MyApp", []);

MyApp.controller('radioButtonController', function($scope){
    $scope.home = function () {
        $scope.message = "This is Home Page"
    }

    $scope.About = function () {
        $scope.message = "Here you can know aboutUs"
    }

    $scope.help = function () {
        $scope.message = "Do you need our assistance???"
    }

    $scope.contact = function () {
        $scope.message = "You can ContactUs"
    }

});

