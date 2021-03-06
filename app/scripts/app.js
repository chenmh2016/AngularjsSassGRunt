'use strict';

/**
 * @ngdoc overview
 * @name deployWebApp
 * @description
 * # deployWebApp
 *
 * Main module of the application.
 */
var app = angular.module('deployWebApp', ['ngResource','ngRoute','toaster','ngAnimate','ngCookies','ui.router','ui.tree']);
//ng-view的用法
//app.config(function ($routeProvider,$httpProvider) {
//  $httpProvider.interceptors.push('myInterceptor');
//  $httpProvider.defaults.headers.common['X-TEST-BY']='myAngularjsApp';
//
  //$routeProvider
  //    .when('/', {
  //      templateUrl: 'views/main.html',
  //      controller: 'MainCtrl',
  //      controllerAs: 'main'
  //    })
  //    .when('/about', {
  //      templateUrl: 'views/about.html',
  //      controller: 'AboutCtrl',
  //      controllerAs: 'about'
  //    })
  //    .when('/chen', {
  //      templateUrl: 'views/chen.html',
  //      controller: 'AboutCtrl',
  //      controllerAs: 'about'
  //    })
  //    .otherwise({
  //      redirectTo: '/'
  //    });
  //});
app.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  //.state('yundun',{
  //  url:'/yundun',
  //  template:'<div ui-view></div>',
  //  abstract:true
  //})
      .state('basicConfig',{
        url:'/basicConfig',
        templateUrl:'views/basicConfig.html',
        controller:'BasicConfigCtrl as vm'
      })

      .state('loadConfig',{
        url:'/loadConfig',
        templateUrl:'views/loadConfig.html',
        controller:'LoadConfigCtrl as vm'
      })

      .state('stepBar',{
          url:'/stepBar',
          templateUrl:'views/stepBar.html',
          controller:'StepBarCtrl as vm'
      })
    //实现了初次进入系统，首先进入基础配置页面。
    $urlRouterProvider.otherwise('/basicConfig');
});
app.factory('myInterceptor',function($q,$cookies){
  var interceptor={
    'request':function(config){
      //成功的请求方法
      config.headers=config.headers||{};
      if($cookies.get('token')){
        config.headers.authorization='Bear'+$cookies.get('token');
      }
      console.log(config.headers)
      return config;
    },
    'response':function(response){
      //响应成功
      return response;
    },
    'requestError':function(rejection){
      //请求发生了错误，如果能够从错误中恢复，可以返回一个新的请求或者promise
      //return response;
      return $q.reject(rejection);
    },
    'responseError':function(rejection){
      console.log('response error: ', rejection);
      var urlall=rejection.config.url;
      if (rejection.status == 0 && (urlall.length!=0)) {
        window.location.reload();
        //console.log('window.location.reload() '+rejection.status);
      }
      return $q.reject(rejection)
    }

  }
  return interceptor;
})


