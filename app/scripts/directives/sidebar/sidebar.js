'use strict';

angular.module('cmsApp')
  .directive('sidebar', function () {
    return {
      templateUrl: 'scripts/directives/sidebar/sidebar.html',
      restrict: 'E',
      scope: {
      },
      link: function(scope, element, attrs) {
      }
    };
  });
