'use strict';
var app = angular.module('angularSassGruntApp', []);
app.directive('myDirective', function(){
		return {
			restrict: 'E',
			template: '<a href="www.baidu.com">百度</a>'
		};
	});