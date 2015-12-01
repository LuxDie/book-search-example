'use strict';

describe('Directive: bookListItem', function () {

  // load the directive's module
  beforeEach(module('reedsyTestGruntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<book-list-item></book-list-item>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bookListItem directive');
  }));
});
