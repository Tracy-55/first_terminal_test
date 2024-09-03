import assert from "assert";
import allFromTown from "../allFromTown.js";

var fromStellies = allFromTown('CL 124,CY 567, CL 345, CJ 456,CL 341', 'CL');
var fromStellies = allFromTown('CL 124,CY 567, CL 345, CJ 456,CL 341', 'CJ');
var fromKuilsriver = allFromTown('CL 124,CY 567, CL 345, CJ 456, CL 341', 'CF');

describe("Testing the allFromTown function", function () {
    it("should return all the registration numbers in the string that are from Stellies,when called with 'CL 124,CY 567, CL 345, CJ 456,CL 341', 'CJ'.", function () {

        assert.deepEqual(fromStellies, ['CJ 456']);

    });
    it("It should return all the registration numbers in the string that are from Stellies,when called with 'CL'. ", function () {
        assert.deepEqual(fromStellies, ['CJ 456']);

    });

    it("It should return all the registration numbers in the string that are from Kuilsriver,when called with 'CF'", function () {
        assert.deepEqual(fromKuilsriver, []);
    });
});