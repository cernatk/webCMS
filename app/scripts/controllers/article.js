'use strict';

/**
 * @ngdoc function
 * @name cmsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cmsApp
 */
angular.module('cmsApp')
  .controller('ArticleCtrl', function (action, articleService, $routeParams) {
    var vm = this;

    vm.controllerAction = action;

    switch(action) {
		case 'view_list':
    		vm.articles = [];
			articleService.getAll().then(function (response) {
				vm.articles = response;
			});
		break;
		case 'view_by_id':
			vm.article = {};
			var articleId = parseInt($routeParams.articleId);
			if (articleId > 0) {
				articleService.getById(articleId).then(function (response) {
					vm.article = response;
				});
			}
		break;
		case 'view_by_user':
			vm.article = {};
		break;
		case 'create_new':
			vm.article = {};
		break;
    }
    console.log(action)
  });

