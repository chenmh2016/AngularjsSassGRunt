'use strict';

/**
 * @ngdoc function
 * @name deployWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deployWebApp
 */
angular.module('deployWebApp')
    .controller('MainCtrl', controllerFn);
    controllerFn.$inject = ['$scope', '$injector','$http','toaster'];
    function controllerFn($scope, $injector,$http,toaster) {
    $(function () {
        $("[data-toggle='tooltip']").tooltip();
    });
    $scope.formData = {};
    $scope.slaveNode = [{"ip": ''}];
    $scope.vips = [{name: "vip_ageis"},
        {name: "vip_cactus_batch"},
        {name: "vip_cactus_keeper"},
        {name: "vip_cas"},
        {name: "vip_console"},
        {name: "vip_defender"},
        {name: "vip_diamond"},
        {name: "vip_dts_all"},
        {name: "vip_dts_console"},
        {name: "vip_dubbo"},
        {name: "vip_jmenv"},
        {name: "vip_monitor"},
        {name: "vip_mysql_yundun_1"},
        {name: "vip_mysql_monitor"},
        {name: "vip_redis"},
        {name: "vip_sas"},
        {name: "vip_secure"},
        {name: "vip_uim"}
    ];
    $scope.addInfomation = function () {
        $scope.formData.ip_slave = $scope.slaveNode;
        console.log(angular.toJson($scope.formData));
    };
    $scope.add = function () {
        var arr = angular.copy($scope.slaveNode);
        arr.push({"ip": ''});
        $scope.slaveNode = arr;
    };
    $scope.delete=function(index){
        if(index==0){
            delete $scope.ip[index];
        }else {
            $scope.slaveNode.splice(index, 1);
        }
    };
    $scope.run = function () {
        $scope.formData.install_cloud_monitor_orNot = "no";
        $scope.formData.isOS_aegisclient = "no";
        $scope.formData.install_ntp_server_orNot = "yes";

    };
    $scope.run();

    $scope.addInfomation=function(){

        $http({
            method: "GET",
            data:angular.toJson($scope.formData),
            url: "/data/addInfo.json"
        }).then(function(data){
            if (data.data.success) {
                toaster.clear(toastInstance);//注释这句和加上这句看看效果就明白了
                var toastInstance = toaster.pop('success', "配置设置成功");
                toastInstance();
            } else{
                toaster.clear(toastInstance);//注释这句和加上这句看看效果就明白了
                var toastInstance = toaster.pop('error', "配置设置失败");}
                toastInstance();
        },function(data){

        });

    };
    $scope.clear=function(){
        var $form=$("#ad")
        var $names=$form.find("[type='text'],[type='password']");
        $names.each(function(){
            $(this).val("");
        })
    }

}