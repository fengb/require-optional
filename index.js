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

function isRequire(val){
  return !!val.resolve
}

module.exports = function(arg1, arg2, arg3){
  if(!isRequire(arg1)){
    // use local require since it's the best we have
    return requireOptional(require, arg1, arg2)
  }

  if(arg2 != undefined){
    return requireOptional(arg1, arg2, arg3)
  }

  return function(name, def){
    return requireOptional(arg1, name, def)
  }
}
