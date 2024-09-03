import assert from "assert";
import isWeekday from "../isWeekday.js";

describe("Test  is Weekday function", function () {
    it("it should use string parameter to return true for a week day", function () {
        assert.equal(isWeekday('Monday'), true);
    });

    it("it should use string parameter to return false if it not a week day", function () {
        assert.equal(isWeekday('Saturday'), false);
    });

});