const cds = require('@sap/cds')
const axios = require('axios').default
const https = require('https')
const schedule = require('node-schedule')
const agent = new https.Agent({
  rejectUnauthorized: false
})
const { getService } = cds.entities

const job = schedule.scheduleJob('3 * * * * *', () => {
  axios.get('https://discovery-center.cloud.sap/platformx/Services', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    httpsAgent: agent,
    rejectUnauthorized: false
  })
    .then((res) => {
      const results = res.data.d.results
      let datosCompletos = []

      for (let i = 0; i < results.length; i++) {
        const datosInsert = { ID: i, name: results[i].ShortName, desc: results[i].ShortDesc }
        datosCompletos.push(datosInsert)
      }
      cds.run(INSERT.into(getService).entries(datosCompletos))
    })
    .catch((err) => { console.log(err) })

  return 'Succeeded'
})
