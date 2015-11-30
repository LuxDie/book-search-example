'use strict';

describe('Controller: BookDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('reedsyTestGruntApp'));

  var BookDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookDetailCtrl = $controller('BookDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookDetailCtrl.awesomeThings.length).toBe(3);
  });
});
