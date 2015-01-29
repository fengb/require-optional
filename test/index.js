var expect = require('chai').expect
var requireOptional = require('..')(require)

describe('requireOptional()', function(){
  it('requires an existing module', function(){
    var fromRequire = require('mocha')
    expect(requireOptional('mocha')).to.equal(fromRequire)
  })

  it('returns default value if module does not exist', function(){
    var def = function(){}
    expect(requireOptional('missing', def)).to.equal(def)
  })

  it('requires relative files', function(){
    var fromRequire = require('../package.json')
    expect(requireOptional('../package.json')).to.equal(fromRequire)
  })
})
