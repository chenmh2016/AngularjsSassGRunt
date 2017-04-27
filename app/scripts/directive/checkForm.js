'use strict';
var app = angular.module('deployWebApp');
//错误提示信息的指令
app.directive('errorMessageDir', function errorMessageDir($compile){
		return {
			restrict: 'A',
			require:'ngModel',
			link:function(scope,element,attrs,ngModel){
				var subScope=scope.$new(true);
				subScope.hasError=function(){
					return ngModel.$invalid && ngModel.$dirty;
				};
				subScope.errors=function(){
					return ngModel.$error;
				};
				//在当前元素（即input元素）的父元素的后面追加一个元素，展示错误提示信息
				var hint=$compile('<div class="col-sm-3" ng-if="hasError()" style="padding-top: 5px"><span style="color:red" ng-repeat="(name,wrong) in errors()" ng-if="wrong">{{name|error}}</span></div>')(subScope);
				element.parent().after(hint);
			}

		};
	});

//判断是否与设置的网段在同一网段
app.directive('netSegOrNot', function netSegOrNot(){
	return {
		restrict: 'A',
		require:'ngModel',
		link:function(scope,element,attrs,ngModel){
			var isSame=function(value){
				var anotherValue=scope.$eval(attrs.netSegOrNot);
				var arrayTemp1=value.split(".");
				var arrayTemp2=[];
				for(var i=0;i<3;i++){
					arrayTemp2.push(arrayTemp1[i]);
				}
				var inputValueNet=arrayTemp2.join('.');
				return inputValueNet===anotherValue;
			};
			ngModel.$parsers.push(function(value){
				ngModel.$setValidity('same',isSame(value));
				return isSame(value)?value:undefined;
			});
			element.bind("ng-blur",function(){
					return scope.$eval(attrs.netSegOrNot);
					ngModel.$setValidity('same',isSame(ngModel.$modelValue));
			});

		}

	};
});
