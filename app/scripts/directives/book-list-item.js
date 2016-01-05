'use strict';

/**
 * @ngdoc directive
 * @name bookSearch.directive:bookListItem
 * @description
 * # bookListItem
 */
angular.module('bookSearch')
  .directive('bookListItem', function () {
    return {
      templateUrl: 'views/book-list-item.html',
      restrict: 'E',
      link: function postLink() {}
    };
  });
