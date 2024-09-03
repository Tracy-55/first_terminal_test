import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('Test From where function', function () {

    it('it should take the car registration number as a parameter and return Bellville for the car registration number starts with CY', function () {
        assert.equal(fromWhere('CY 564789'), 'Bellville');
    });

    it('it should return Cape Town for the car registration number starts with CA', function () {
        assert.equal(fromWhere('CA 987584'), 'Cape Town');
    });

    it('for the car registration number that starts with ZN it should return some other place!', function () {
        assert.equal(fromWhere('ZN 564593'), 'Some other place!');
    });

});