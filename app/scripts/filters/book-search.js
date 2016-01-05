'use strict';

/**
 * @ngdoc filter
 * @name bookSearch.filter:bookSearch
 * @function
 * @description
 * # bookSearch
 * Filter in the bookSearch.
 */
angular.module('bookSearch')
  .filter('bookSearch', function () {
    return function (input, params) {
      if (!input) { return []; }
      if (!params) { return input; }
      return input.filter(el => {
        return (!params.name || (el.name.toUpperCase().indexOf(params.name.toUpperCase()) > -1)) && (!params.genre || (el.genre.name === params.genre)) && (!params.category || (el.genre.category === params.category));
      });
    };
  });
