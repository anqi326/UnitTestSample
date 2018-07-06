import { square } from '../src/algorithm'
import chai from 'chai'
let expect = chai.expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return value when the value is present', function() {
      expect([1,2,3].indexOf(2)).to.be.equal(1);
    });
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf(4)).to.be.equal(-1);
    });
  });
});

describe('Number', function() {
  describe('#square()', function() {
    it('should return squared value when value is a number', function() {
      expect(square(2)).to.be.equal(5);
    });
    it('should return error when value is not number', function() {
      expect(square('a')).to.be.NaN
    });
  });
});