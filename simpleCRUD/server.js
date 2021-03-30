const cds = require('@sap/cds')
const axios = require('axios')

cds.once('served', async () => {
  console.log('---> Initialized')

  const { Data } = cds.entities

  axios.get('https://api.mocki.io/v1/b043df5a')
    .then(res => {
      const values = res.data

      values.forEach(value => {
        const dataEntries = {
          city: value.city,
          name: value.name,
          age: Math.floor(Math.random() * (99 - 18) + 18)
        }
        cds.run(INSERT.into(Data).entries(dataEntries))
      })
      console.log('Datos insertados')
    })
    .catch(error => console.log(error))
})

module.exports = cds.server