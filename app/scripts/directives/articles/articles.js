'use strict';

angular.module('cmsApp')
  .directive('articles', function () {
    return {
      templateUrl: 'scripts/directives/articles/articles.html',
      restrict: 'E',
      scope: {
      	articles: '=',
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
