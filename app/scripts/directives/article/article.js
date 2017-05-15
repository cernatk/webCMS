'use strict';

angular.module('cmsApp')
  .directive('article', function () {
    return {
      templateUrl: 'scripts/directives/article/article.html',
      restrict: 'E',
      scope: {
      	article: '=',
      },
      link: function(scope, element, attrs) {

        scope.addComment = function () {
          console.log(scope.formData)
          articleService.addComment(scope.formData)/*.then(function (response) {
            // body...
          })*/
        }
      }
    };
  });
