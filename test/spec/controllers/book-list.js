'use strict';

describe('Controller: BookListCtrl', function () {

  // load the controller's module
  beforeEach(module('reedsyTestGruntApp'));

  var BookListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookListCtrl = $controller('BookListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookListCtrl.awesomeThings.length).toBe(3);
  });
});
