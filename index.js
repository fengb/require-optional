function requireOptional(require, name, def){
  try {
    require.resolve(name)
  } catch (e) {
    if(e.code === 'MODULE_NOT_FOUND'){
      return def
    } else {
      throw e
    }
  }

  return require(name)
}

module.exports = function(require){
  return function(name, def){
    return requireOptional(require, name, def)
  }
}

module.exports.raw = requireOptional
