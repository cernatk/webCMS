'use strict';

/**
 * @ngdoc directive
 * @name cmsApp.directive:demoForm
 * @description
 * # demoForm
 */
angular.module('cmsApp')
  .directive('demoForm', function () {
    return {
      templateUrl: 'scripts/directives/demoform.html',
      restrict: 'E',
      scope: {
      	internalFormData: '=formData',
      	submitForm: '&callback'
      },
      controller: function ($scope) {
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
