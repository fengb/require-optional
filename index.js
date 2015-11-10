var moduleResolveAsCaller = require('module-resolve-as-caller')

function moduleResolveError (path) {
  try {
    require.resolve(path)
    return null
  } catch (err) {
    return err
  }
}

module.exports = function (path, def, errorCb) {
  path = moduleResolveAsCaller(path)
  var err = moduleResolveError(path)
  if (err) {
    if (errorCb) {
      errorCb(err)
    }
    return def
  } else {
    return require(path)
  }
}
