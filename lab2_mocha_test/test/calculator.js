const chai = require('chai');
const expect = chai.expect;
const calculator = require('../app/calculator.js')

describe('Calculator Tests', function() {
    describe('Addition Tests', function() {
        it('add(5, 2) should return 7', function() {
            expect(calculator.add(5, 2)).to.equal(7);
        });

        it('add(5, 2) should return 8 (expected to fail)', function() {
            expect(calculator.add(5, 2)).to.equal(8);
        });
    })
    describe('Subtraction Tests', function() {
        it('sub(5, 2) should return 3', function() {
            expect(calculator.sub(5, 2)).to.equal(3);
        });

        it('sub(5, 2) should return 4 (expected to fail)', function() {
            expect(calculator.sub(5, 2)).to.equal(4);
        });
    })
    describe('Multiplication Tests', function() {
        it('mul(5, 2) should return 10', function() {
            expect(calculator.mul(5, 2)).to.equal(10);
        });

        it('mul(5, 2) should return 12 (expected to fail)', function() {
            expect(calculator.mul(5, 2)).to.equal(12);
        });
    })
    describe('Division Tests', function() {
        it('div(10, 2) should return 5', function() {
            expect(calculator.div(10, 2)).to.equal(5);
        });

        it('div(10, 2) should return 6 (expected to fail)', function() {
            expect(calculator.div(10, 2)).to.equal(6);
        });
    })
});

