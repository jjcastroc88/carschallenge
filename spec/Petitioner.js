var petitioner,
    mockMethod,
    mockUrl,
    mockObject,
    mockXHRObject = {};

describe('When Petitioner class ins invoked', function() {
    beforeEach(function() {
      petitioner = new Petitioner();
    });

    describe('When ajax method is invoked'; function() {
      it('Should invoke _setXMLHttpRequest', function() {
          spyOn(petitioner, '_setXMLHttpRequest');
          expect(petitioner._setXMLHttpRequest).toHaveBeenCalled();
      });

      it('Should must be called with url, method and object', function() {
          spyOn(petitioner, 'ajax');
          petitioner.ajax();
          expect(petitioner.ajax).toHaveBeenCalled(mockMethod, mockUrl, mockObject);
      });
    });

    describe('When _setXMLHttpRequest is invoked', function() {
      it('Should create an xhr object in petitioner', function() {
          petitioner._setXMLHttpRequest();
          expect(petitioner.xhr).toEqual(mockXHRObject);
      });
    });
});
