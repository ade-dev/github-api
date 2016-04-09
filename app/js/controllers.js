"use strict";

var appControllers = angular.module('AppControllers',[]);

appControllers.controller('SearchController', function($scope, HttpService) {
  $scope.getRepo = function() {
    HttpService.getData($scope.username).then(function(user){
      if(!user.error){
        $scope.isError = false;
        $scope.repos = user;
        $scope.repos.length > 0 ? $scope.isData = true : $scope.isData = false
      }
      else{
        $scope.errorMsg = user.error + " " + user.errorTxt;
        $scope.isError = true;
        $scope.isData = false
      }
    });
    $scope.orderIndex = 'stargazers_count';
  }
  $scope.showRepo = function() {
    if($scope.username !== $scope.search && $scope.search != false) {
      $scope.username = $scope.search;
      $scope.getRepo()
    }
  }
});
