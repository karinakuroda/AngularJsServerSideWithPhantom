'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs:'ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$compile','$sce','$interpolate', function($scope,$compile,$sce,$interpolate) {
  $scope.dataStatus='ready';
 $scope.spice="teste";
 $scope.chiliSpicy = function() {

   var template = "<button ng-click='doSomething()'>{{1+1}}</button> <p>The food is {{spice}}!</p>";
            var linkFn = $compile(template);
   var content = linkFn($scope);
var teste = $interpolate(template)($scope);//.apply();
var teste2 = $interpolate(template,false, null, true).apply();
        // $scope.spice = $sce.trustAsHtml($compile('<b>Hi Rupesh hi{{1+1}} <u>dfdfdfdf</u>!</b>sdafsdfsdf<button>dfdfasdf</button>'));// $compile('<a ng-click="click(1)" href="#">Click me {{1+1}}</a>');
        console.log(teste2);
    };
}])
;
// .directive('dynamic', function ($compile) {
//   return {
//     restrict: 'A',
//     replace: true,
//     link: function (scope, ele, attrs) {
//       scope.$watch(attrs.dynamic, function(html) {
//         ele.html(html);
//         $compile(ele.contents())(scope);
//       });
//     }
//   };
// });