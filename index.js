const util = require('util')

module.exports = (package) => Object.entries(package)
  .map(([ key, value ]) => ({
    [key]: typeof value === 'function'
      ? util.promisify(value)
      : value
  }))
  .reduce((a, b) => ({ ...a, ...b }), {})