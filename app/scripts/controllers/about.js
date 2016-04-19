'use strict';

/**
 * @ngdoc function
 * @name angularSassGruntApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSassGruntApp
 */
angular.module('angularSassGruntApp')
  .controller('AboutCtrl', ['$scope','serviceW', function ($scope,serviceW) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.test = 'Hello World';
    this.serviceTest = serviceW.getName();
    console.log(serviceW.getName());
  }]);
