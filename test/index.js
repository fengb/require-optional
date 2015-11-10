var chai = require('chai')
             .use(require('sinon-chai'))
var expect = chai.expect

var sinon = require('sinon')
var requireOptional = require('..')

var def = {}

describe('requireOptional()', function () {
  describe('simple syntax', function () {
    it('requires an existing module', function () {
      var fromRequire = require('mocha')
      expect(requireOptional('mocha')).to.equal(fromRequire)
    })

    it('requires relative modules', function () {
      var fromRequire = require('../package.json')
      expect(requireOptional('../package.json')).to.equal(fromRequire)
    })

    context('missing', function () {
      it('returns default value', function () {
        expect(requireOptional('missing', def)).to.equal(def)
      })

      it('calls error function if passed in', function () {
        var cb = sinon.spy()
        requireOptional('missing', null, cb)
        expect(cb).to.have.been.calledWithMatch({
          code: 'MODULE_NOT_FOUND',
          message: "Cannot find module 'missing'",
        })
      })
    })
  })
})
