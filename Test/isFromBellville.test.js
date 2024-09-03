import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('Test if isFromBellville function', function () {

    it('it should return true if the registration number starts with CY', function () {
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('it should return false if the registration number starts with CJ', function () {
        assert.equal(isFromBellville('CJ 123'), false);
    });
});