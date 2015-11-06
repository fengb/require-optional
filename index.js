var moduleResolveAsCaller = require('module-resolve-as-caller')

function moduleExists(path){
  try {
    require.resolve(path)
    return true
  } catch (e) {
    if(e.code === 'MODULE_NOT_FOUND'){
      return false
    } else {
      throw e
    }
  }
}

module.exports = function(path, def){
  path = moduleResolveAsCaller(path)
  return moduleExists(path) ? require(path) : def
}
