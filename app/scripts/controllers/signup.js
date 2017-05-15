'use strict';

/**
 * @ngdoc function
 * @name cmsApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the cmsApp
 */
angular.module('cmsApp')
  .controller('LoginCtrl', function ($scope, $location, userService) {

    this.users = []
    $scope.users = []

 	$scope.userFormData = {};
 	$scope.errorMessage = null;
    $scope.signupFunc = function (data) {
    	
            var userData={
                firstName:$scope.firstName,
                lastName:$scope.lastName,
                age:$scope.age,
                userName:$scope.userName,
            }
         /*    $http.post(url, userData)
            .success(function (data, status, headers, config) {
            })
            .error(function (data, status, header, config) {
            });
            */
    };
    $scope.clearError = function () {
        $scope.errorMessage = null; 
    }
  });
