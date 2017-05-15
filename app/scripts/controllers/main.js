'use strict';

/**
 * @ngdoc function
 * @name cmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cmsApp
 */
angular.module('cmsApp')
  .controller('MainCtrl', function (userService) {
    var vm = this;
    vm.users = [];

    userService.getAll().then(function(response) {
      vm.users = response;
    });

  });
