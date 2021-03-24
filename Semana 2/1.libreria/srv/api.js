const cds = require("@sap/cds");
const { Stock } = cds.entities;

module.exports = cds.service.impl(async (srv) => {
  srv.on('modInven', async req => {
    try {
      console.log('Entrando a Stock')
      const { book, amount } = req.data
      const arrBooks = await cds.run(SELECT.from(Stock).where({ book_ID: book }))
      if (arrBooks.length > 0) {
        await cds.run(UPDATE(Stock).with({ amount: { '+=': amount } }).where({ book_ID: book }))
        console.log(`Se ha actualizaco correctamente ${book}`)
        return "Maxi"
      }
      else {
        return 'No hay libros para actualizar'
      }
    } catch (err) {
      console.log(err)
      return "Maxi"
    }
  })

  srv.on('insertOrder', async req => {
    try {
      console.log('Entrando a Stock')
      const { book } = req.data

      if (await cds.run(INSERT.into(Stock).entries(req.data.book))) {
        return `Se ha actualizaco correctamente ${book}`
      }
      else {
        return 'Hubo un error'
      }
    } catch (err) {
      console.log(err)
      return "Maxi"
    }
  })

})