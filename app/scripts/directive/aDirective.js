'use strict';
//var app = angular.module('angularSassGruntApp');
app.directive('aDirective', function(){
		return {
			restrict: 'A',
			template: '<a href="#">a directive</a>'
		};
	});
