'use strict';

angular.module('cmsApp')
  .directive('comments', function () {
    return {
      templateUrl: 'scripts/directives/comments/comments.html',
      restrict: 'E',
      scope: {
      	list: '=',
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
