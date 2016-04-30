'use strict';
//var app = angular.module('angularSassGruntApp');
app.service('service_S', function(){
	this.getName =  function(){
		return 'service service';
	};
});

// var testService = function(){
// 	this.getName = function(){
// 		return 'Hello World';
// 	}
// }
// var app = angular.module('angularSassGruntApp');
// app.service('serviceW', testService);