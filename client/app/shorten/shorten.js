angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  $scope.data = {};
  $scope.shorten = function(){
    console.log(this.url);
    $scope.data.links = this.url;
  };
  // console.log('text is:',$scope);
  $scope.addLink = function(){
    $http.post('/api/links').
      success(function(data){
        // $scope.data.links = data;
      });
  };
});
