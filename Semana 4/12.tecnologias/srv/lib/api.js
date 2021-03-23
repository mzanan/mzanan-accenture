
const cds = require('@sap/cds')
const axios = require('axios')
const { Clientes, Proyectos, Tecnologias } = cds.entities

module.exports = cds.service.impl(async srv => {
  srv.after('CREATE', 'Proyectos', async (req, res) => {
    try {
      const techId = req.tecnologia_ID
      const techObtenida = await cds.run(SELECT.from(Tecnologias).where({ ID: techId }))
      const techDificultad = techObtenida[0].dificultad
      const horas = techDificultad * 8
      const output = 'La tarea será realizada en ' + horas + ' horas'

      return output
    }
    catch (err) {
      console.log(err)
      return err
    }
  })
})