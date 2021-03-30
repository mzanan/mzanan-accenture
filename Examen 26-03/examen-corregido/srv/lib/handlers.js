const axios = require('axios')

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

module.exports = {
  postProducts: async (Products) => {
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
            Discontinued: element.Discontinued
          }
          cds.run(INSERT.into(Products).entries(dataEntity))
        })
        console.log('Productos insertados')
      }).catch(err => console.log(err))
  },

  postOrders: async (Orders) => {
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
            Region_Date: element.ShipRegion + '_' + element.RequiredDate // Region + Fecha
          }
          cds.run(INSERT.into(Orders).entries(dataEntity))
        })
        console.log('Ordenes insertadas')
      }).catch(err => console.log(err))
  },

  postDetails: async (Order_Details) => {
    await getEntity('Order_Details?$filter=ProductID lt 20 and OrderID lt 10447')
      .then(value => {
        value.forEach(element => {
          const dataEntity = {
            ProductID_ProductID: element.ProductID,
            OrderID_OrderID: element.OrderID,
            UnitPrice: element.UnitPrice,
            Quantity: element.Quantity,
            Discount: element.Discount
          }
          cds.run(INSERT.into(Order_Details).entries(dataEntity))
        })
        console.log('Order_Details insertados')
      }).catch(err => console.log(err))
    console.log('Ejecucion finalizada con exito')
  }
}