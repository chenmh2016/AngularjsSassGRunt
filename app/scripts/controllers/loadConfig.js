'use strict';

/**
 * @ngdoc function
 * @name deployWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deployWebApp
 */
angular.module('deployWebApp')
    .controller('loadCtrl', controllerFn);
controllerFn.$inject = ['$scope', '$injector', '$http', 'toaster'];
function controllerFn($scope, $injector, $http, toaster) {


    $scope.loadGroup = [{
        group: "两台",
        Index: 2,
        count: 33
    }, {
        group: "四台",
        Index: 4,
        count: 2423
    }, {
        group: "六台",
        Index: 5,
        count: 2423
    }];
    $scope.isActive = 2;
    $scope.select = function (data) {
        if (data && data.Index != 'diy') {
            $scope.isActive = data.Index;
            console.log("选中的是", data.group)
        } else {
            $scope.isActive = "diy";
            console.log("选中的是:diy")
        }
    }


    $scope.remove = function (scope) {
        scope.remove();
    };

    $scope.toggle = function (scope) {
        scope.toggle();
    };

    $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0, 0, a);
    };

    $scope.newSubItem = function (scope) {
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
            id: nodeData.id * 10 + nodeData.nodes.length,
            title: nodeData.title + '.' + (nodeData.nodes.length + 1),
            nodes: []
        });
    };

    $scope.collapseAll = function () {
        $scope.$broadcast('angular-ui-tree:collapse-all');
    };

    $scope.expandAll = function () {
        $scope.$broadcast('angular-ui-tree:expand-all');
    };

    $scope.data = [{
        'id': 1,
        'title': 'master',
        'nodes': [
            {
                'id': 11,
                'title': 'cas'
            },
            {
                'id': 12,
                'title': 'console'
            },
            {
                'id': 11,
                'title': 'redis'
            },
            {
                'id': 12,
                'title': 'monitor'
            }
        ]
    }, {
        'id': 2,
        'title': 'slave',
        'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
        'nodes': [
            {
                'id': 21,
                'title': 'jmenv',
                'nodes': []
            },
            {
                'id': 22,
                'title': 'zookeeper',
                'nodes': []
            }
        ]
    }];

}