'use strict';

/**
 * @ngdoc service
 * @name bookSearch.data
 * @description
 * # data
 * Service in the bookSearch.
 */
angular.module('bookSearch')
  .service('data', function ($http) {

  	let url = 'scripts/book.json';

    return {
    	getBookList() {
		    return $http.get(url);
      }
    };

  });