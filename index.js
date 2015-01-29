function requireExists(require, name){
  try {
    require.resolve(name)
    return true
  } catch (e) {
    if(e.code === 'MODULE_NOT_FOUND'){
      return false
    } else {
      throw e
    }
  }
}

function requireOptional(require, name, def){
  return requireExists(require, name) ? require(name) : def
}

module.exports = function(require){
  return function(name, def){
    return requireOptional(require, name, def)
  }
}

module.exports.raw = requireOptional
