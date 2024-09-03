import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe("Testing the totalPhoneBill function", function () {
    it("it should return R7.45,when it called with a 'call, sms, call, sms, sms'", function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));

    });
    it("it should return R3.40,when it called with a 'call, sms'", function () {
        assert.equal('R3.40', totalPhoneBill('call, sms'));

    });
    it("it should return R1.30,when it called with a 'call, sms'", function () {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});