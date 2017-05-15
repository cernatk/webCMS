'use strict';

/**
 * @ngdoc overview
 * @name cmsApp
 * @description
 * # cmsApp
 *
 * Main module of the application.
 */
angular
  .module('cmsApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'vm'
      })
      .when('/articles', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl',
        controllerAs: 'vm',
        resolve: {
          action: function(){
            return 'view_list';
          }
        }
      })
      .when('/article/:articleId', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl',
        controllerAs: 'vm',
        resolve: {
          action: function(){
            return 'view_by_id';
          }
        }
      })
      .when('/:userId/articles', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl',
        controllerAs: 'vm',
        resolve: {
          action: function(){
            return 'view_by_user';
          }
        }
      })
      .when('/article/new', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl',
        controllerAs: 'vm',
        resolve: {
          action: function(){
            return 'create_new';
          }
        }
      })
      .otherwise({
        redirectTo: '/articles'
      });
  }).constant('CONSTANTS', {
    apiBase: 'http://127.0.0.2:5000'
  });
