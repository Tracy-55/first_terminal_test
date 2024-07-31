
import { expect } from 'chai';
import greet from './greet.js';

describe('The greet function', () => {
    it('should greet Andrew correctly', () => {
        const message = greet('Andrew');
        expect(message).to.equal('Hello, Andrew!');
    });

    it('should greet Karen correctly', () => {
        const message = greet('Karen');
        expect(message).to.equal('Hello, Karen!');
    });
});
