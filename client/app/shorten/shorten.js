angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  // Your code here
  $scope.link = {};
  console.log($scope.text);
  $scope.addLink = function(){
    $http.post('/api/links').
      success(function(data){
        // $scope.data.links = data;
      });
  };
});
