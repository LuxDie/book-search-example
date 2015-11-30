'use strict';

/**
 * @ngdoc function
 * @name reedsyTestGruntApp.controller:BookListCtrl
 * @description
 * # BookListCtrl
 * Controller of the reedsyTestGruntApp
 */
angular.module('reedsyTestGruntApp')
  .controller('BookListCtrl', function ($scope, $http) {
    $http.get('scripts/book.json').then((response) => {
      $scope.books = response.data;
    })
  });
