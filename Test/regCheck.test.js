import assert from "assert";
import regCheck from "../regCheck.js";

describe('The regCheck function', function () {



    it('This should return true when called with a name that endWith GP correctly', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it('This should return false when called with a name that do not endWith GP correctly', function () {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

    });
    it('This should return true when called with a name that endWith L correctly', function () {
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it('This should return false when called with a name that do not endWith L correctly', function () {
        assert.equal(regCheck('5566 L', 'M'), false);

    });
    it('This should return true when called with a name that endWith EC correctly', function () {
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });
    it('This should return false when called with a name that do not endWith EC correctly', function () {
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });
    it('This should return true when called with a name that endWith MP correctly', function () {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });
    it('This should return false when called with a name that do not endWith MP correctly', function () {
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
});