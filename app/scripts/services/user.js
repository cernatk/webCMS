'use strict';

/**
 * @ngdoc service
 * @name cmsApp.user
 * @description
 * # user
 * Factory in the cmsApp.
 */
angular.module('cmsApp')
  .factory('userService', function ($q, $http, CONSTANTS) {
    // Service logic
    // ...

    const apiBase = CONSTANTS.apiBase;
    // Public API here
    return {

      getAll: function () {
        return $http.get(`${apiBase}/users`).then(function (response) {
          if (response.status === 200) {
            return response.data.users;
          }
          return [];
        })
      },
      getById: function (userId) {
        return $http.get(`${apiBase}/users/idUser/${userId}`).then(function (response) {
          console.log(response)
        })
      },
      createUser: function (user) {
        return $http.post(`${apiBase}/users`, user).then(function (response) {
          console.log(response)
        })
      },
      login: function (userData) {
        return $http.get(`${apiBase}/users/email/${userData.email}`).then(function (response) {
          return response.data
        })
      }
    };
  });
