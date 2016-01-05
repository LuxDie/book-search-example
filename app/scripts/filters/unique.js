'use strict';

/**
 * @ngdoc filter
 * @name bookSearch.filter:unique
 * @function
 * @description
 * # unique
 * Filter in the bookSearch.
 */
angular.module('bookSearch')
  .filter('unique', function () {
    return function (input) {
      if (!input) { return []; }
      return input.filter((el, idx, self) => {
        return self.indexOf(el) === idx;
      });
    };
  });
