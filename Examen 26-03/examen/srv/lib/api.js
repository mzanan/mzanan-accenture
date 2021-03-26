const cds = require('@sap/cds')
const axios = require('axios')
const https = require('https')
const agent = new https.Agent({
  rejectUnauthorized: false
})

module.exports = cds.service.impl(async (srv, req) => {

  const getEntity = (entity) => {
    const promise = axios.get(`https://services.odata.org/Experimental/Northwind/Northwind.svc/${entity}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      rejectUnauthorized: false
    })

    const dataPromise = promise.then((res) => res.data.value)
    return dataPromise
  }

  const postEntities = async () => {
    const { Products, Orders, Order_Details } = cds.entities
    await getEntity('Products')
      .then(value => {
        value.forEach(element => {
          const dataEntity = {
            ProductID: element.ProductID,
            ProductName: element.ProductName,
            QuantityPerUnit: element.QuantityPerUnit,
            UnitPrice: element.UnitPrice,
            UnitsInStock: element.UnitsInStock,
            UnitsOnOrder: element.UnitsOnOrder,
            ReorderLevel: element.RecordLevel,
            Discontinued: element.Discontinued
          }
          cds.run(INSERT.into(Products).entries(dataEntity))
        })
        console.log('Productos insertados')
      }).catch(err => console.log(err))

    await getEntity('Orders')
      .then(value => {
        value.forEach(element => {
          const dataEntity = {
            OrderID: element.OrderID,
            OrderDate: element.OrderDate,
            RequiredDate: element.RequiredDate,
            ShippedDate: element.ShippedDate,
            ShipVia: element.ShipVia,
            Freight: element.Freight,
            ShipName: element.ShipName,
            ShipAddress: element.ShipAddress,
            ShipCity: element.ShipCity,
            ShipRegion: element.ShipRegion,
            ShipPostalCode: element.ShipPostalCode,
            ShipCountry: element.ShipCountry,
            Region_Date: element.ShipRegion + '_'+ element.RequiredDate
          }
          cds.run(INSERT.into(Orders).entries(dataEntity))
        })
        console.log('Ordenes insertadas')
      }).catch(err => console.log(err))

    await getEntity('Order_Details')
      .then(value => {
        value.forEach(element => {
          const dataEntity = {
            OrderID: element.OrderID,
            ProductID: element.ProductID,
            UnitPrice: element.UnitPrice,
            Quantity: element.Quantity,
            Discount: element.Discount
          }
          cds.run(INSERT.into(Order_Details).entries(dataEntity))
        })
        console.log('Order_Details insertados')
      }).catch(err => console.log(err))
  }

  try {
    postEntities()
    console.log('Ejecucion finalizada con exito')
  }
  catch {
    err => console.log(err)
  }

  srv.before('UPDATE', 'Products', async req => {
    try {
      const { Products, UnitsInStock, UnitsOnOrder, NewStock } = req.data
      let arrProducts = await cds.run(SELECT.from(Products))
      if (arrProducts.length > 0) {
        if (UnitsInStock > UnitsOnOrder && NewStock > UnitsInStock) {
          await cds.run(UPDATE(Products).with({ UnitsOnOrder: NewStock }).where({ ProductID: Products }))
        }
        else {
          req.reject('Nuevo stock no debe menor que UnitsOnOrder')
        }
      }
    }
    catch {
      err => console.log(err)
    }
  })
})