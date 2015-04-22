angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(obj){
    console.log('called getLinks');
    // $scope.data.links = obj;
    // console.log($scope.data.links);
    console.log('args for getLinks',JSON.stringify(arguments));
    console.log('Links',Links);
  };
  $scope.getLinks();
});
