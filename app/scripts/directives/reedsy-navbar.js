'use strict';

/**
 * @ngdoc directive
 * @name reedsyTestGruntApp.directive:reedsyNavbar
 * @description
 * # reedsyNavbar
 */
angular.module('reedsyTestGruntApp')
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
