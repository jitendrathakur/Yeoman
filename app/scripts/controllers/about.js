'use strict';

/**
 * @ngdoc function
 * @name setupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the setupApp
 */
angular.module('setupApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
