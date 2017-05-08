'use strict';

/**
 * @ngdoc function
 * @name deployWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deployWebApp
 */
angular.module('deployWebApp')
    .controller('SideBarCtrl', function ($scope, tree, $state) {

        $scope.items = [
            {
                id: 1,
                title: '云盾',
                items: [
                    {
                        id: 11,
                        title: "基础配置",
                        url: "#/basicConfig",
                        state: "basicConfig",
                        groupIndex: 1,
                        icon: "cmhIcon-xing",
                        includes: ["basicConfig"]
                    }
                    , {
                        id: 12,
                        title: "负载配置",
                        state: "loadConfig",
                        groupIndex: 2,
                        icon: "cmhIcon-xing",
                        includes: ["loadConfig"]
                    }
                    , {
                        id: 13,
                        title: "部署进度",
                        state: "stepBar",
                        groupIndex: 3,
                        icon: "cmhIcon-xing",
                        includes: ["stepBar"]
                    }
                    //,{
                    //  id:13,
                    //  title:"主题树",
                    //  state:"reader.themeTree",
                    //  groupIndex:3,
                    //  icon:"cmhIcon-xing"
                    //}
                ]
            }
            //  ,{
            //    id:2,
            //    title:"自定义指令",
            //    poster:"破浪",
            //    dateCreated:"2015-08-07T15:05:06",
            //    items:[
            //      {
            //        id:11,
            //        title:"expander",
            //        url:"#/ngDirective/expander",
            //        state:"ngDirective.expander",
            //        groupIndex:4,
            //        icon:"cmhIcon-xing"
            //      }
            //    ]
            //  },{
            //    id:3,
            //    title:"其他",
            //    poster:"破浪",
            //    dateCreated:"2015-08-07T15:05:06",
            //    items:[
            //      {
            //        id:11,
            //        title:"滚屏加载",
            //        url:"#/other/endlessScroll",
            //        state:"other.endlessScroll",
            //        groupIndex:5,
            //        icon:"cmhIcon-xing"
            //      }
            //
            //    ]
            //  },{
            //  id:4,
            //    title:"css",
            //    poster:"破浪",
            //    dateCreated:"2015-08-07T15:05:06",
            //    items:[
            //    {
            //      id:11,
            //      title:"仿tab",
            //      url:"#/css/overviews",
            //      state:"css.overviews",
            //      groupIndex:6,
            //      icon:"cmhIcon-xing"
            //    }
            //
            //  ]
            //}
        ];
        tree.enhance($scope.items);
        $scope.select = function (data) {
            $scope.isActive = data.groupIndex;
        };
        $scope.isSidebarFold = false;
        function toggleSidebarStatus() {
            $scope.isSidebarFold = !$scope.isSidebarFold;
            var type = $scope.isSidebarFold ? 'mini' : 'full';
            console.log($scope.isSidebarFold + "$scope.isSidebarFold");
            $scope.$emit("sidebarFold", [$scope.isSidebarFold]);
        }

        $scope.toggleSidebarStatus = toggleSidebarStatus;

        $scope.checkActive = function (item) {
            if (item.state && item.includes) {
                var module = item.includes;
                if (angular.isArray(module)) {
                    for (var i = 0; i < module.length; i++) {
                        if ($state.includes(module[i])) return true;
                    }
                    return false;
                } else {
                    return $state.includes(module);
                }
            }
            return active;
        };


    });
