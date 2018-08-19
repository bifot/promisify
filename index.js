const util = require('util')

module.exports = (package) => Object.entries(package)
  .map(([ key, value ]) => typeof value === 'function'
    ? { [key]: util.promisify(value) }
    : { [key]: value })
  .reduce((a, b) => ({ ...a, ...b }), {})