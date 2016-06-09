"use strict";

/**
 * @ngdoc function
 * @name setupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the setupApp
 */
angular.module("setupApp")
  .controller("MainCtrl", function ($scope, localStorageService) {
	var todosInStore = localStorageService.get("todos");

	$scope.todos = todosInStore || ["rambow"];

	$scope.$watch("todos", function () {
		localStorageService.set("todos", $scope.todos);
	}, true);


	$scope.addTodo = function () {
		$scope.todos.push($scope.todo);
		$scope.todo = "";
	};

	$scope.removeTodo = function (index) { $scope.todos.splice(index, 1);
	};


  });
