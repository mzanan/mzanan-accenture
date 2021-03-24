const eCommerce = () => { //funcion principal

  // --> No se cómo hacer para que los prompts no se cierren tan rápido.

  const [producto1, producto2, precio1, precio2, codigoDescuento] = ['Remera blanca', 'Remera negra', 150, 200, 'accenture2021']

  alert('Bienvenido')

  let nombre = validarNombre()
  let mail = validarEmail()
  let dni = validarDni()
  let fecha = validarFecha() //me faltó validar que sea > 18 años

  alert('Productos en promo: ' + producto1 + ': $' + precio1 + ', ' + producto2 + ': $' + precio2)
  let cantidad1 = compraProducto(producto1, precio1)
  let cantidad2 = compraProducto(producto2, precio2)

  let precioSubtotal1 = precioSubtotalProducto(precio1, cantidad1)
  let precioSubtotal2 = precioSubtotalProducto(precio2, cantidad2)

  let precioTotal = precioSubtotal1 + precioSubtotal2

  let detalleSubtotal1 = detalleSubtotalProducto(producto1, precio1, cantidad1, precioSubtotal1)
  let detalleSubtotal2 = detalleSubtotalProducto(producto2, precio2, cantidad2, precioSubtotal2)

  let detalleProductos = detalleCompra(detalleSubtotal1, detalleSubtotal2, precioTotal)

  alert(detalleProductos)

  let tc = confirm('¿Desea abonar con tarjeta de crédito?')
  if (tc) {
    let cuotas = prompt('¿En cuántas cuotas?')
    var pagoCuotas = detalleCuotas(cuotas, precioTotal) //usé var para resolverlo rápido y usarlo en la línea 43

    alert(detalleProductos + '\n' + pagoCuotas)
  }

  let codigo = confirm('¿Tiene un código de descuento? (accenture2021)')
  if (codigo) {
    let codigoIngresado = prompt('Ingrese el código')
    if (codigoIngresado === codigoDescuento) {
      alert('Código correcto. Recibiste 10% off.' + '\n' + detalleProductos + '\n' + 
      'código de descuento ingesado: ' + codigoIngresado + '\n' + pagoCuotas) //falta calcular descuento
    } else {
      alert('Código incorrecto')
    }
  }
  alert('Gracias por confiar en nosotros. Saludos de Accenture-Commerce.')
}

const validarNombre = nombre => {
  let nombreInput = prompt('Ingrese su nombre')

  if (nombreInput === null || !nombreInput.match(/^[a-zA-Z]+$/i)) {
    alert('Dato incorrecto, reingrese su nombre')
    validarNombre(nombreInput)
  }
  if (nombreInput.length > 30) {
    alert('El nombre no puede superar los 30 caracteres')
    validarNombre(nombreInput)
  }
  return nombreInput
}

const validarEmail = mail => {
  let mailInput = prompt('Ingrese email')

  if (mailInput === null || !mailInput.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i)) {
    alert('Dato incorrecto, reingrese su email')
    validarEmail(mailInput)
  }
  return mailInput
}

const calcularEdad = fecha => {
  let hoy = new Date()
  let cumpleanos = new Date(fecha)
  let edad = hoy.getFullYear() - cumpleanos.getFullYear()
  let m = hoy.getMonth() - cumpleanos.getMonth()

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--
  }
  return edad
}

const validarFecha = fecha => {
  let FechaInput = prompt('Ingrese Fecha')
  let edad = calcularEdad(FechaInput)
  alert(edad + ' años')
  return edad
}

const validarDni = dni => {
  let dniInput = prompt('Ingrese dni')

  if (dniInput === null || !dniInput.match(/^([0-9])*$/)) {
    alert('Dato incorrecto, reingrese su dni')
    validarDni(dniInput)
  }
  return dniInput
}

const compraProducto = (producto, precio) => {
  let compra = confirm('¿Quiere comprar ' + producto + ': por $' + precio + '?')
  if (compra) {
    let unidades = prompt('¿Cuántas unidades desea?')
    return unidades
  }
}

const precioSubtotalProducto = (precio, cantidad) => {
  let precioSubtotal = precio * cantidad
  return precioSubtotal
}

const detalleSubtotalProducto = (producto, precio, cantidad, subtotal) => {
  let listaSubtotal = producto + ': ' + cantidad + ' x' + ' $' + precio + ' = ' + '$' + subtotal
  return listaSubtotal
}

const detalleCompra = (detalle1, detalle2, total) => {
  let detalleTotal = 'Subtotal: ' + '\n' + detalle1 + ' \n' + detalle2 + ' \n' + ' \n' + ' \n' + 'Total: ' + '$' + total
  return detalleTotal
}

const detalleCuotas = (cuotas, precioTotal) => {
  let precioPorCuota = precioTotal / cuotas
  let pagoCuotas = cuotas + ' x $' + precioPorCuota.toFixed(2)
  return pagoCuotas
}

console.log(eCommerce())