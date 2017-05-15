'use strict';

describe('Directive: demoForm', function () {

  // load the directive's module
  beforeEach(module('cmsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<demo-form></demo-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the demoForm directive');
  }));
});
