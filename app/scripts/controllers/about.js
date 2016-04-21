'use strict';

/**
 * @ngdoc function
 * @name angularSassGruntApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSassGruntApp
 */
angular.module('angularSassGruntApp')
  .controller('AboutCtrl', ['$scope', 'service_S', 'service_F', 'serivce_C', function ($scope, service_S, service_F, service_C) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.test = 'Hello World';
    $scope.serviceService = service_S.getName();
    $scope.factoryService = service_F.getNames('hi');
    console.log(service_S.getName());
    console.log(service_F.getNames('World'));
    $scope.constantConfig = service_C;
  }]);
