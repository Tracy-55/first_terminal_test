import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('The yearsAgo function', function () {



    it('It should return 47 when called with 1976', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });
    it('It should return 23 when called with 2000', function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});