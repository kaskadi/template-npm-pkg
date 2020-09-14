/* eslint-env mocha */
const chai = require('chai')
const { assert } = require('chai')
chai.should()

// *************
// Write your tests here
describe('template-action', function () {
  // ******* Example test
  describe('Placeholder test', function () {
    this.timeout(30000)
    it('should pass', function () {
      const exp = true
      assert(exp === true, 'This cannot fail!')
    })
  })
  // *******
})
// *************