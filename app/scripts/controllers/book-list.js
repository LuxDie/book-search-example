'use strict';

/**
 * @ngdoc function
 * @name bookSearch.controller:BookListCtrl
 * @description
 * # BookListCtrl
 * Controller of the bookSearch
 */
angular.module('bookSearch')
  .controller('BookListCtrl', function ($scope, data, uniqueFilter) {
    data.getBookList().then((response) => {
      $scope.books = response.data;
      $scope.categories = uniqueFilter($scope.books.map((el) => {
        return el.genre.category;
      }));
      $scope.genres = uniqueFilter($scope.books.map((el) => {
        return el.genre.name;
      }));
    });
  });
