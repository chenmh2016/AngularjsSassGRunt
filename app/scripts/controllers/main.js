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
        var string=angular.toJson($scope.formData);
        $http({
            method: "GET",
            url: "/data/addInfo.json?params=" + string
        }).then(function(data){
            if (data.data.success) {
                toaster.clear(toastInstance);//注释这句和加上这句看看效果就明白了
                var toastInstance =
                    toaster.pop('success', "配置设置成功");
                toastInstance();
            } else{
                toaster.clear(toastInstance);//注释这句和加上这句看看效果就明白了
                var toastInstance =
                    toaster.pop('error', "配置设置失败");}
                toastInstance();
        },function(data){

        });

    };
    $scope.clear=function(){
        var $form1=$("#form1");
        var $form2=$("#form2");
        var $form3=$("#form3");
        var $form4=$("#form4");
        var $form5=$("#form5");
        var array=[$form1,$form2,$form3,$form4,$form5];
    for(var i=0;i<5;i++){
        var $names=array[i].find("[type='text'],[type='password'],[type='number'],[type='email']");
        $names.each(function(){
            $(this).val("");
        })
    }
    }

}