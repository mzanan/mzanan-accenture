// Action para actualizar precios por conjunto de productos
// Cuando creo un dueño por url le paso las tiendas para que cree la relación
// Control de stock de productos: action q retira cantidades de productos y agrega cantidad, con id y cantidad.Los productos tendrán un min y máximo q disparara alerta al llegar a los mismos.

const cds = require('@sap/cds')
const { Owners, Stores, Products } = cds.entities

module.exports = cds.service.impl(async srv => {
  console.log('inside module')
  srv.on('updatePrices', async req => {
    console.log('updatePrices')
    try {
      console.log('try')
      const { product, price_value } = req.data
      console.log(product)
      const arrProducts = await cds.run(SELECT.from(Products).where({ ID: product.ID }))
      console.log('arrProducts')
      console.log(arrProducts)

      if (arrProducts.length > 0) {
        console.log('productos > 0')
        console.log('price value', product.price_value)

        await cds.run(UPDATE(Products).with({ price_value: product.price_value }).where({ ID: product.ID }))
        console.log(req._.req.query)
      }
      else {
        console.log(`No se ha encontrado ningun producto con el id: ${product.ID}`)
      }
    }
    catch (error) {
      console.log('error: ', error)
      return error
    }
    return 'Succeeded'
  })
})

