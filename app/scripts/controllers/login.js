'use strict';

angular.module('cmsApp')
  .controller('LoginCtrl', function ($scope, $location, userService) {

    var vm = this;
 	$scope.formData = {};
 	$scope.errorMessage = null;
    $scope.loginFunction = function () {
        console.log($scope.formData)
    	userService.login($scope.formData).then(function (response) {
            console.log(response)
        })
    };
    $scope.clearError = function () {
        $scope.errorMessage = null; 
    }
  });
