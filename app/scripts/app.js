'use strict';

/**
 * @ngdoc overview
 * @name reedsyTestGruntApp
 * @description
 * # reedsyTestGruntApp
 *
 * Main module of the application.
 */
angular
  .module('reedsyTestGruntApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularUtils.directives.dirPagination'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/book-list.html',
        controller: 'BookListCtrl',
        controllerAs: 'bookList'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/book-list', {
        templateUrl: 'views/book-list.html',
        controller: 'BookListCtrl',
        controllerAs: 'bookList'
      })
      .when('/book-detail/:id', {
        templateUrl: 'views/book-detail.html',
        controller: 'BookDetailCtrl',
        controllerAs: 'bookDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
