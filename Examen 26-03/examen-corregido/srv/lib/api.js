const cds = require('@sap/cds')
const { Products } = cds.entities

module.exports = cds.service.impl(async srv => {
  srv.before('CREATE', 'Order_Details', async req => {
    try {
      const detail = req.data
      const product = await cds.run(SELECT.one(Products).where({ ProductID: detail.ProductID_ProductID }))
      if (product) {
        if ((product.UnitsInStock + detail.Quantity) > product.UnitsInStock) {
          await cds.run(UPDATE(Products).with({ UnitsInStock: detail.Quantity }).where({ ProductID: detail.ProductID_ProductID }))
          console.log(`Producto actualizado, nuevo stock: ${detail.Quantity}`)
        }
        else {
          console.log('Actualizacion de producto rechazada')
          req.reject(405, `Nuevo stock no debe menor que product.UnitsInStock + detail.Quantity: ${product.UnitsInStock + detail.Quantity}`)
        }
      }
    }
    catch {
      err => console.log(err)
    }
  })
})