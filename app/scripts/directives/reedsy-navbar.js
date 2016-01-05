'use strict';

/**
 * @ngdoc directive
 * @name bookSearch.directive:reedsyNavbar
 * @description
 * # reedsyNavbar
 */
angular.module('bookSearch')
  .directive('reedsyNavbar', function ($location) {
    return {
      restrict: 'A',
      link: function postLink(scope) {
        scope.showListBtn = () => {
          let path = $location.path();
          return path !== '/book-list' && path !== '/';
        };
      }
    };
  });
