const validator = require('./../index');
const expect = require('expect');

describe('Validator test', function (done) {
    it('Should validate a GP (017xxxx) number', function (done) {
        var mobileNumber = '01711100022';
        var result = validator.isValid(mobileNumber);

        expect(result).toBe(true);
        done();
    });

    it('Should validate a GP (013xxxx) number', function (done) {
        var mobileNumber = '01300000000';
        var result = validator.isValid(mobileNumber);

        expect(result).toBe(true);
        done();
    });

    it("Should validate a Robi number", function (done) {
        var mobileNumber = '01800000000';
        var result = validator.isValid(mobileNumber);

        expect(result).toBe(true);
        done();
    });

    it("Should validate a Airtel number", function (done) {
        var mobileNumber = '01600000000';
        var result = validator.isValid(mobileNumber);

        expect(result).toBe(true);
        done();
    });

    it("Should validate a BanglaLink (019xxxx) number", function (done) {
        var mobileNumber = '01900000000';
        var result = validator.isValid(mobileNumber);

        expect(result).toBe(true);
        done();
    });

    it("Should validate a BanglaLink (014xxxx) number", function (done) {
        var mobileNumber = '01400000000';
        var result = validator.isValid(mobileNumber);

        expect(result).toBe(true);
        done();
    });

    it("Should validate a Teletalk number", function (done) {
        var mobileNumber = '01500000000';
        var result = validator.isValid(mobileNumber);

        expect(result).toBe(true);
        done();
    });

    it('Should reject an invalid number', function (done) {
        var mobileNumber = '122121';
        var result = validator.isValid(mobileNumber);

        expect(result).toBe(false);
        done();
    });
});
