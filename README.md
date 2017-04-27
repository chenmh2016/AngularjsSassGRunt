# angular-sass-grunt

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

##环境安装
- 安装nodejs
- 安装ruby，compass依赖它。
- 步骤：
	1. npm install
	2. bower install
	3. gem install compass(会自动安装sass)
	4. npm install -g grunt-cli
- 运行
	1. 安装完毕后，在项目目录下运行grunt server，项目就可以跑起来。

问题记录：
一、toaster
1、toaster的使用，bower install angularjs-toaster --save-dev，将依赖加入到bower.json的dependencies中去
2、重新执行grunt serve的时候就会自动把需要的js和css被index引用了
3、在app.js中在主模块中注入这个toaster（它也是一个模块），同时也注入了ngAnimate，前者依赖后者
4、在controller中注入toaster就可以使用了
5、使用方法在html中增加一句话： <toaster-container></toaster-container>//这个指令放在当前页面就行，没有这个是没有特效的，他是特效的容器
6、<!DOCTYPE html>
  <html>
    <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/1.1.0/toaster.min.css" rel="stylesheet" />
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min.js" ></script>
      <script src="https://code.angularjs.org/1.2.0/angular-animate.min.js" ></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/angularjs-toaster/1.1.0/toaster.min.js"></script>
      <script>

        angular.module('main', ['toaster', 'ngAnimate'])
          .controller('myController', function($scope, toaster) {
              $scope.pop = function(){
                  toaster.pop('success', "title", "text");
              };
          });
      </script>
    </head>

      <body ng-app="main">
        <toaster-container></toaster-container>
        <h1>Hello Plunker!</h1>
        <div ng-controller="myController">
          <button ng-click="pop()">Show a Toaster</button>
        </div>
      </body>

  </html>

  二、ng-model="formData[item.name]" ng-model中使用变量这么用。
  使用的地方在vip的设计的时候<form class="form-horizontal" novalidate name="form4">
                                     <div class="form-group" ng-repeat="item in vips">
                                         <label class="col-sm-2 control-label">{{item.name}}</label>

                                         <div class="col-sm-4">
                                             <input type="text" class="form-control" placeholder="请设置{{item.name}}" name="{{item.name}}"
                                                    ng-model="formData[item.name]"
                                                    required error-message-dir net-seg-or-not="formData.netSegment"/>
                                         </div>
                                     </div>
                                 </form>


