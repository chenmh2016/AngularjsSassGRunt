'use strict';
//var app = angular.module('angularSassGruntApp');
app.directive('eDirective', function(){
		return {
			restrict: 'E',
			template: '<a href="#">e directive</a>'
		};
	});