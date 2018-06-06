# @bifot/promisify

Util for promisify packages.

## Install

```sh
$ npm i @bifot/promisify -S
```

## Tests

```sh
$ npm test
```

## Docs

```js
const _fs = require('fs')
const promisify = require('@bifot/promisify')

const fs = promisify(_fs)
const files = await fs.readdir('./')

console.log(files) // [ '.idea', 'index.js', 'index.test.js', 'package.json' ]
```

## License

MIT.