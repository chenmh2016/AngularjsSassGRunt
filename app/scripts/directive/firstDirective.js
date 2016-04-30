'use strict';
//var app = angular.module('angularSassGruntApp');
app.directive('myDirective', function(){
		return {
			restrict: 'AE',
			template: '<a href="#">directive</a>'
		};
	});