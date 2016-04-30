'use strict';

//var app = angular.module('angularSassGruntApp');

app.factory('service_F', function(){
	var serviceInstance = function(value){
		return 'factory service' + ' ' + value;
	};	

	return {
		getNames:function(value){
			return serviceInstance(value, 'getNames');
		}
	};
});