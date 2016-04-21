/*
 constant是个很有用的东东，我们经常会用于对directive之类的做配置信息。
 所以当你想创建一个directive，并且你希望能够做一些配置信息，同时给些默认的配置，constant是个不错的的选择。
 constant可以译作常量，因为我们所设置的值value是不能被改变的。其可以接受基础类型和object对象
*/
'use strict';
var app = angular.module('angularSassGruntApp');

app.constant('serivce_C', {
    config1: 'hello',
    config2: 'i am from constant.'
});

/*
 Value和上面的constant很相似，唯一是其在赋值后还可以被改变。
 它也被常用于directive配置信息。Value service只会保留values，我们不会在service中计算其值。
*/
app.value('valueConfig', {
    valueConfig1: true,
    valueConfig2: 'i am from valueConfig.'
});