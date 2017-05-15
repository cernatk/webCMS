'use strict';

angular.module('cmsApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'scripts/directives/navbar/navbar.html',
      restrict: 'E',
      scope: {
      },
      link: function(scope, element, attrs) {
        scope.items = [{
          link: '/#/',
          label: 'Home'
        },{
          link: '/#/articles',
          label: 'Articles'
        }]
      }
    };
  });
