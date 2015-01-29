var expect = require('chai').expect
var requireOptional = require('..')

var def = function(){}

describe('requireOptional()', function(){
  describe('simple syntax', function(){
    it('requires an existing module', function(){
      var fromRequire = require('mocha')
      expect(requireOptional('mocha')).to.equal(fromRequire)
    })

    it('returns default value if module does not exist', function(){
      expect(requireOptional('missing', def)).to.equal(def)
    })
  })

  describe('fugly syntax', function(){
    it('requires an existing module', function(){
      var fromRequire = require('mocha')
      expect(requireOptional(require, 'mocha')).to.equal(fromRequire)
    })

    it('requires relative files', function(){
      var fromRequire = require('../package.json')
      expect(requireOptional(require, '../package.json')).to.equal(fromRequire)
    })

    it('returns default value if module does not exist', function(){
      expect(requireOptional(require, 'missing', def)).to.equal(def)
    })
  })

  describe('curried syntax', function(){
    beforeEach(function(){
      this.curriedRequireOptional = requireOptional(require)
    })

    it('requires an existing module', function(){
      var fromRequire = require('mocha')
      expect(this.curriedRequireOptional('mocha')).to.equal(fromRequire)
    })

    it('requires relative files', function(){
      var fromRequire = require('../package.json')
      expect(this.curriedRequireOptional('../package.json')).to.equal(fromRequire)
    })

    it('returns default value if module does not exist', function(){
      expect(this.curriedRequireOptional('missing', def)).to.equal(def)
    })
  })
})
