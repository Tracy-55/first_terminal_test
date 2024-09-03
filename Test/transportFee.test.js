import assert from "assert";
import transportFee from "../transportFee.js";

describe('The transportFee function', function () {

    it('This should return R20 when called with morning', function () {
        assert.equal(transportFee('morning'), 'R20');
    });
    it('This should return R10 when called with afternoon', function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('This should return for night shift return free when called with nightshift', function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});