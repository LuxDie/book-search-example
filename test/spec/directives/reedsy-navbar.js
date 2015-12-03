'use strict';

describe('Directive: reedsyNavbar', function () {

  // load the directive's module
  beforeEach(module('reedsyTestGruntApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<reedsy-navbar></reedsy-navbar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the reedsyNavbar directive');
  }));
});