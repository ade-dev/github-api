"use strict";

var appServices = angular.module('AppServices',[]);

appServices.service('HttpService', function($http) {
  return {
    getData: function(user) {
      return $http.get("https://api.github.com/users/" + user + "/repos").then(function(response) {
        return response.data
      },function(response) {
          return {"error": response.status, "errorTxt": response.statusText}
      });
    }
  };
});



