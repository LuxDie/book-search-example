'use strict';

/**
 * @ngdoc function
 * @name reedsyTestGruntApp.controller:BookListCtrl
 * @description
 * # BookListCtrl
 * Controller of the reedsyTestGruntApp
 */
angular.module('reedsyTestGruntApp')
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
