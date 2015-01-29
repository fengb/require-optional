module.exports = function(require, name, def){
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
