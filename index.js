const util = require('util')

module.exports = (package) => Object.entries(package)
    .filter(([ key, value ]) => typeof value === 'function')
    .map(([ key, value ]) => ({ [key]: util.promisify(value) }))
    .reduce((a, b) => ({ ...a, ...b }), {})