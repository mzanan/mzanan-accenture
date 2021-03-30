const cds = require('@sap/cds')
const axios = require('axios')
const https = require('https')
const agent = new https.Agent({
  rejectUnauthorized: false
})

const { postProducts, postOrders, postDetails } = require('./srv/lib/handlers')

cds.once('served', async () => {
  console.log('served')
  const { Products, Orders, Order_Details } = cds.entities

  await postProducts(Products)
  await postOrders(Orders)
  await postDetails(Order_Details)
})

module.exports = cds.server //> delegate to default server.js
