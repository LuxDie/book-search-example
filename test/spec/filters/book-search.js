'use strict';

describe('Filter: bookSearch', function () {

  // load the filter's module
  beforeEach(module('reedsyTestGruntApp'));

  // initialize a new instance of the filter before each test
  var bookSearch;
  beforeEach(inject(function ($filter) {
    bookSearch = $filter('bookSearch');
  }));

  it('should return the input prefixed with "bookSearch filter:"', function () {
    var text = 'angularjs';
    expect(bookSearch(text)).toBe('bookSearch filter: ' + text);
  });

});
