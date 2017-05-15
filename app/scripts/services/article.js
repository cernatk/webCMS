'use strict';

/**
 * @ngdoc service
 * @name cmsApp.demo
 * @description
 * # demo
 * Factory in the cmsApp.
 */
angular.module('cmsApp')
  .factory('articleService', function ($q, $http, CONSTANTS) {

    const apiBase = CONSTANTS.apiBase;

    return {

      getAll: function () {
        return $http.get(`${apiBase}/articles`).then(function (response) {
          if (response.status === 200) {
            return response.data.articles;
          }
          return [];
        })
      },
      getById: function (id) {
        return $http.get(`${apiBase}/articles/${id}`).then(function (response) {
          if (response.status === 200 && Object.keys(response.data.article).length) {
            return response.data.article;
          }
          return [];
        })
      },
      addComment: function (formData) {
        return
      }
    };
  });
