"use strict";

var appControllers = angular.module('AppControllers',[])

appControllers.controller('SearchController', function($scope, $http){

  $scope.changeHandler = function(){
    getData();
  };

  function getData(){
    $http.get("https://api.github.com/users/" + $scope.search + "/repos").success(function(data){
      $scope.repos = data;
      console.log('Data is ready');
    });
    $scope.orderIndex = 'stargazers_count';
  }
});
