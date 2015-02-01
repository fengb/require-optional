var callsite = require('callsite')
var path = require('path')

function moduleExists(modulePath){
  try {
    require.resolve(modulePath)
    return true
  } catch (e) {
    if(e.code === 'MODULE_NOT_FOUND'){
      return false
    } else {
      throw e
    }
  }
}

module.exports = function(modulePath, def){
  if(modulePath.indexOf('.') === 0){
    var caller = callsite()[1]
    modulePath = path.dirname(caller.getFileName()) + '/' + modulePath
  }

  return moduleExists(modulePath) ? require(modulePath) : def
}
