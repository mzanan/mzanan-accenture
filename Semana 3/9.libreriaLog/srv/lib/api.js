const cds = require('@sap/cds')
const { Log } = cds.entities

const post = (req, entity) => {
  try {
    const actionData = {
      book_ID: req.ID,
      bookName: req.name,
      method: req.method
    }
    await cds.run(INSERT.into(entity).entries(actionData))

    console.log('Resuelto con exito')
    return 'Resuelto con exito'
  }
  catch (e) {
    console.log(e)
    return 'Hubo un error'
  }
}

module.exports = cds.service.impl(async srv => {
  srv.after('CREATE', 'Books', async (req, data) => {
    post(req, data, Log)
  })
})

/* TESTS
module.exports = cds.service.impl(async srv => {
  srv.before(['CREATE', 'READ', 'UPDATE', 'DELETE'], 'Books', async (req, res) => {
    console.log('----------------------> before create', '\n')
    console.log(cds.serve('./srv/api.cds'), '\n')
    console.log('req._.req.query ------->', req._.req.query, '\n')
    console.log('req.query ------->', req.query, '\n')
    console.log('req.user ------->', req.user, '\n')
    console.log('req.body ------->', req.body, '\n')
    console.log('req.data ------->', req.data, '\n')
  })

  srv.after(['CREATE', 'READ', 'UPDATE', 'DELETE'], 'Books', async (req, res) => {
    console.log('----------------------> after create', '\n')
    console.log('res.data ------->', res.data, '\n')
    console.log('res.user ------->', res.user, '\n')
  })
})

// https://www.digitalocean.com/community/tutorials/nodejs-req-object-in-expressjs
*/