'use strict';
var app = angular.module('angularSassGruntApp');
app.service('serviceW', function(){
	this.getName =  function(){
		return 'Hello World';
	};
});

// var testService = function(){
// 	this.getName = function(){
// 		return 'Hello World';
// 	}
// }
// var app = angular.module('angularSassGruntApp');
// app.service('serviceW', testService);