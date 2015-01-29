function requireOptional(require, name, def){
  try {
    return require(name)
  } catch (e) {
    if(e.code === 'MODULE_NOT_FOUND'){
      return def
    } else {
      throw e
    }
  }
}

module.exports = function(require){
  return function(name, def){
    return requireOptional(require, name, def)
  }
}

module.exports.raw = requireOptional
