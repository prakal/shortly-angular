angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(result){
    $http.get('/api/links').
      success(function(data){
        $scope.data.links = data;
      });

    // console.log('result is', result);
    // console.log('called getLinks');
    // $scope.data.links = obj;
    // console.log($scope.data.links);
    // console.log('args for getLinks',JSON.stringify(arguments));
    // console.log('Links',Links);
  };
  $scope.getLinks();
});
