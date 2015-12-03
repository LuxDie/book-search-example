'use strict';

/**
 * @ngdoc service
 * @name reedsyTestGruntApp.data
 * @description
 * # data
 * Service in the reedsyTestGruntApp.
 */
angular.module('reedsyTestGruntApp')
  .service('data', function ($http) {

  	let url = 'scripts/book.json';

    return {
    	getBookList() {
		    return $http.get(url);
      }
    };

  });