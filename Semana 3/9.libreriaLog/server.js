const cds = require("@sap/cds")

module.exports = cds.service.impl(async srv => {
  cds.on('bootstrap', () => { console.log('bootstrap') })
  cds.on('served', () => { console.log('served') })
})