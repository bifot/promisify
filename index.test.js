const { expect } = require('chai')
const _fs = require('fs')
const promisify = require('./')
const fs = promisify(_fs)

it('fs.readdir via async/await', async () => {
  const files = await fs.readdir('./')

  expect(files).to.be.a('array')
})