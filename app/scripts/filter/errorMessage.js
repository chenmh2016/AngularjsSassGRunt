'use strict';
var app = angular.module('deployWebApp');
//用过滤器生成用户友好的提示信息
app.filter('error', function (){
        var message={
            required:'此项不能为空！',
            pattern:'请输入合法的Ip地址！',
            same:'请保证输入的Ip地址与设定的网段相同！',
            email:'请输入正确的邮箱格式！'
        };
        return function(name){
            return message[name]||name;
        }


});
