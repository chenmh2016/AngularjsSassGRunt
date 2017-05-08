'use strict';

/**
 * @ngdoc function
 * @name deployWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deployWebApp
 */
angular.module('deployWebApp')
    .controller('StepBarCtrl', controllerFn);
controllerFn.$inject = ['$rootScope','$scope', '$injector','$http','toaster','$interval'];
function controllerFn($rootScope,$scope, $injector,$http,toaster,$interval) {

    // $scope.steps = [{str: "提交申请", active:true}, {str: "等待审核"}, {str: "等待审批"}, {str: "审批通过"}];

   // var timer=$interval(function(){
   //     $http({
   //         method: "GET",
   //         url: "/data/getStepBar.json"
   //     }).then(function(data){
   //         $scope.steps=data.data.data;
   //
   //
   //     })
   // },1000)

    ($http({
        method: "GET",
        url: "/data/getStepBar.json"
    }).then(function(data){
        $scope.steps=data.data.data;


    }));

}