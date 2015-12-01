'use strict';

/**
 * @ngdoc directive
 * @name reedsyTestGruntApp.directive:bookListItem
 * @description
 * # bookListItem
 */
angular.module('reedsyTestGruntApp')
  .directive('bookListItem', function () {
    return {
      templateUrl: 'views/book-list-item.html',
      restrict: 'E',
      link: function postLink() {}
    };
  });
