'use strict';

angular.module('cmsApp')
  .directive('commentForm', function (articleService) {
    return {
      templateUrl: 'scripts/directives/comment-form/comment-form.html',
      restrict: 'E',
      scope: {
      	formData: '=',
        addComment: '&'
      },
      link: function(scope, element, attrs) {
      }
    };
  });
