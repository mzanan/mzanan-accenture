const cds = require('@sap/cds')

module.exports = cds.service.impl(async srv => {
  srv.before('CREATE', 'Data', async req => {
    try {
      const oneEntry = req.data
      await cds.run(INSERT.into(Data).entries(oneEntry))

      console.log('Dato creado exitosamente')
      return 'Dato creado exitosamente'
    }
    catch {
      error => console.log(error)
    }
  })

  //Faltaria el READ

  srv.before('UPDATE', 'Data', async req => {
    try {
      const ID = req.data.ID
      const age = req.data.age

      //Quería validar que si la edad es > 8 devuelva un error pero no hace nada
      if (age.match(/^[0-8]*$/gm)) {
        await cds.run(UPDATE(Data).where({ ID })) //ID : ID
      }
      else {
        throw new Error('La edad debe menor que 9')
      }

      console.log('Dato actualizado exitosamente')
      return 'Dato actualizado exitosamente'
    }
    catch {
      error => console.log(error)
    }
  })

  srv.before('DELETE', 'Data', async req => {
    try {
      const ID = req.data.ID
      await cds.run(DELETE.from(Data).where({ ID })) //ID : ID

      console.log('Dato borrado exitosamente')
      return 'Dato borrado exitosamente'
    }
    catch {
      error => console.log(error)
    }
  })
})