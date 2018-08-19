const { expect } = require('chai')
const _fs = require('fs')
const promisify = require('./')
const fs = promisify(_fs)

it('fs.readdir via async/await', async () => {
  const files = await fs.readdir('./')

  expect(files).to.be.a('array')
})

it('does not delete non-function properties', () => {
  const package = {
    prop: 'string',
    anotherProp: 1,
    sleep: (ms, cb) => setTimeout(cb, ms)
  }

  const promisifiedPackage = promisify(package)

  expect(promisifiedPackage).to.have.property('prop')
  expect(promisifiedPackage).to.have.property('anotherProp')
})