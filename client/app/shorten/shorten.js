angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  $scope.data = {};
  $scope.link = {};
  $scope.shorten = function(){
    $scope.data.links = this.url;
    console.log('this.url',$scope.data.links);
    $location.path('/links');
  };
  // console.log('text is:',$scope);
  $scope.addLink = function(){
    $http.post('/api/links').
      success(function(data){
        $scope.data.links = data;
    });
  };
});
