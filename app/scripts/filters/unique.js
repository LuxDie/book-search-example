'use strict';

/**
 * @ngdoc filter
 * @name reedsyTestGruntApp.filter:unique
 * @function
 * @description
 * # unique
 * Filter in the reedsyTestGruntApp.
 */
angular.module('reedsyTestGruntApp')
  .filter('unique', function () {
    return function (input) {
      if (!input) { return []; }
      return input.filter((el, idx, self) => {
        return self.indexOf(el) === idx;
      });
    };
  });
