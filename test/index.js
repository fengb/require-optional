var expect = require('chai').expect
var requireOptional = require('..')

describe('requireOptional()', function(){
  it('requires an existing module', function(){
    var fromRequire = require('mocha')
    expect(requireOptional(require, 'mocha')).to.equal(fromRequire)
  })

  it('returns default value if module does not exist', function(){
    var def = function(){}
    expect(requireOptional(require, 'missing', def)).to.equal(def)
  })

  it('requires relative files', function(){
    expect(requireOptional(require, '..')).to.equal(requireOptional)
  })
})
