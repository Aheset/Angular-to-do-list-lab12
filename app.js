var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
	$scope.list = ['Read Angular Book', 'Pregame the assignment', 'Do the lab'];

$scope.addtoDo = function( ){
	$scope.list.push($scope.enteredtoDo);
	$scope.enteredtoDo= "";
	};


});

