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
controllerFn.$inject = ['$rootScope','$scope', '$injector', '$http', 'toaster'];
function controllerFn($rootScope,$scope, $injector, $http, toaster) {

   // 数据的初始化---start---
    $scope.loadGroup = [{
        group: "两台",
        Index: 2
    }, {
        group: "四台",
        Index: 4
    }, {
        group: "六台",
        Index: 6
    }];

    $scope.data2Node = [{
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

    $scope.data4Node = [{
        'id': 1,
        'title': 'node1',
        'nodes': [
            {
                'id': 11,
                'title': 'cas'
            },
            {
                'id': 12,
                'title': 'console'
            }
        ]
    }, {
        'id': 2,
        'title': 'node2',
        'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
        'nodes': []
    }, {
        'id': 3,
        'title': 'node3',
        'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
        'nodes': []

    }, {
        'id': 4,
        'title': 'node4',
        'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
        'nodes': []
    }];

    $scope.data6Node = [{
        'id': 1,
        'title': 'node1',
        'nodes': [
            {
                'id': 11,
                'title': 'cas'
            },
            {
                'id': 12,
                'title': 'console'
            }
        ]
    }, {
        'id': 2,
        'title': 'node2',
        'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
        'nodes': []
    }, {
        'id': 3,
        'title': 'node3',
        'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
        'nodes': []

    }, {
        'id': 4,
        'title': 'node4',
        'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
        'nodes': []
    }, {
        'id': 5,
        'title': 'node5',
        'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
        'nodes': []

    }, {
        'id': 6,
        'title': 'node6',
        'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
        'nodes': []
    }];
   //选择哪个负载节点配置依赖于第一步基础配置中节点的个数，同理下面展示的负载配置也与节点个数相符合。
    $scope.isActive = $rootScope.nodeNumber||2;
    var data="data"+$scope.isActive+"Node";
    $scope.data = $scope[data]||$scope.data2Node;
    $scope.tree2 = [];

    // 数据的初始化 ---end---

    //选择负载配置的节点数
    $scope.select = function (data) {
        if (data && data.Index != 'diy') {
            $scope.isActive = data.Index;
            if ($scope.isActive == 2) {
                $scope.data = $scope.data2Node;
            } else if ($scope.isActive == 4) {
                $scope.data = $scope.data4Node;
            } else if ($scope.isActive == 6) {
                $scope.data = $scope.data6Node;
            }
            // console.log("选中的是", data.group)
        } else {
            $scope.isActive = "diy";
            // console.log("选中的是:diy")
        }
    };

    //节点树图的展示
    $scope.id=1;
    $scope.addNode=function(){

      $scope.tree2.push({
            'id': $scope.id,
                'title': 'node'+($scope.id),
                'nodes': []}
      )
        $scope.id++;
    };

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

    $scope.findNodes = function () {

    };

}