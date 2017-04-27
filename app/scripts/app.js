'use strict';

/**
 * @ngdoc overview
 * @name deployWebApp
 * @description
 * # deployWebApp
 *
 * Main module of the application.
 */
var app = angular.module('deployWebApp', ['ngResource','ngRoute','toaster','ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/chen', {
        templateUrl: 'views/chen.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


