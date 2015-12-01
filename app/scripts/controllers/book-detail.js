'use strict';

/**
 * @ngdoc function
 * @name reedsyTestGruntApp.controller:BookDetailCtrl
 * @description
 * # BookDetailCtrl
 * Controller of the reedsyTestGruntApp
 */
angular.module('reedsyTestGruntApp')
  .controller('BookDetailCtrl', function ($scope, $http, $routeParams) {
    $http.get('scripts/book.json').then(response => {
      let book = response.data.find(el => { return el.id === $routeParams.id; });
      $scope.book = book;
      $scope.reccomended = response.data.filter(el => {
        return el.genre.name === book.genre.name && el.genre.category === book.genre.category && el.id !== book.id;
      }).slice(0, 3);
    });
  });
