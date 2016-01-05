'use strict';

/**
 * @ngdoc function
 * @name bookSearch.controller:BookDetailCtrl
 * @description
 * # BookDetailCtrl
 * Controller of the bookSearch
 */
angular.module('bookSearch')
  .controller('BookDetailCtrl', function ($scope, $routeParams, data) {
    data.getBookList().then(response => {
      let book = response.data.find(el => { return el.id === $routeParams.id; });
      $scope.book = book;
      $scope.reccomended = response.data.filter(el => {
        return el.genre.name === book.genre.name && el.genre.category === book.genre.category && el.id !== book.id;
      }).slice(0, 3);
    });
  });
