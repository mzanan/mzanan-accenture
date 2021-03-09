/*
El cliente tiene una empresa de pastelería y quiere contar con una herramienta para mandar saludos. Dependiendo de la empresa que le compra al cliente, él les manda una carta de agradecimiento; sin embargo, hay empresas que son muy formales y otras donde la formalidad está visto como algo obsoleto. Entonces necesita saber, teniendo el nombre de la empresa, qué frase tiene que utilizar.

Requerimientos:
Hacer un programa que tenga precargados hasta 3 nombres y saludos de empresas y en base a un nombre que ingrese el usuario, elija el saludo correspondiente y lo devuelva por el navegador.
  
En el caso de que el usuario ingrese el nombre de una empresa que no exista, se debe pedir una confirmación para verificar si ese nombre realmente existe o no. Si el nombre es correcto, se debe devolver un saludo genérico, y en caso de que sea incorrecto, volver a pedirlo.

Tips:
Para preguntar al usuario una pregunta de sí o no, como en una confirmación, podemos utilizar confirm() que activa una ventana en el navegador con las opciones 'Aceptar' o 'Cancelar'. Cuando el usuario responde, confirm() devolverá un booleano con el valor correspondiente: false si respondió cancelar y true si se aceptó la pregunta. Toma como primer parámetro la pregunta que queremos hacer al usuario.

Ejemplo:
let userConfirm = confirm('Are you sure?');
console.log(userConfirm);
*/

const saludosPasteleria = (resolve, reject) => {
  const nombres = ['Matias', 'Pedro', 'Raul']
  const saludos = ['Hola', 'Hi', 'Hello']

  let input = prompt('Elija un nombre: ' + nombres.join(', '))

  for (let i = 0; i < nombres.length; i++) {
    if (input === nombres[i])
      return alert('Saludo: ' + saludos[i])
  }

  let userConfirm = confirm('Are you sure?');
  if (userConfirm) {
    return alert('Dato incorrecto')
  }
  setTimeout(() => saludosPasteleria(resolve, reject), 3000)

}
const promiseArray = new Promise(saludosPasteleria)
const resultado = await promiseArray

console.log(resultado)


/*
El cliente tiene una pastelería. Quiere ofrecer descuentos a las empresas que compran sus productos (en este caso, tortas) en cantidad. Estos descuentos dependen de la cantidad de tortas compradas por cada empresa precargada en el sistema.

Si una empresa compra más de 100 tortas, tienen un 10% de descuento en sus próximas compras.
Si una empresa compra más de 500 tortas, tienen un 15% de descuento.
Independientemente de cuántas tortas compre, si compra más de 10 tortas, recibe 1 torta extra cada 15 tortas compradas.
Al cliente le gustaría saber en cada pedido de las empresas que tiene precargadas cuánto debería cobrarles, teniendo en cuenta si tienen descuentos o no y si debería darle tortas extras y cuántas.

Requerimientos:
Hacer un programa que modele los descuentos y tortas extras.
Utilizar los descuentos y tortas extras a la hora de hacer un pedido y que en base a ellos indique cuánto cobrarle a la empresa y cuántas tortas enviarle.
*/

/*
 desc a compradores de tortas segun cantidad
>100 -> 10% en futuras compras 
>500 -> 15% en futuras compras 

>10 -> 1 torta extra cada 15 compradas

*/

const cakeSell = (resolve, reject) => {
  let clientes = [
    {
      'nombre': 'torta',
      'cantidadComprada': 0,
      'descuento': 0,
      'tortaExtra': 0
    },
    {
      'nombre': 'brownie',
      'cantidadComprada': 0,
      'descuento': 0,
      'tortaExtra': 0
    },
    {
      'nombre': 'pastafrola',
      'cantidadComprada': 0,
      'descuento': 0,
      'tortaExtra': 0
    }
  ]

  let newArr = []
  let output = ''

  for (let key in clientes) {
    newArr.push(clientes[key].nombre)
  }

  let inputNombre = prompt('Elija un nombre: ' + newArr.join(', '))
  let inputCantidad = prompt('Ingrese cantidad')

  for (let key in clientes) {
    if (inputNombre === clientes[key]['nombre']) {
      clientes[key]['cantidadComprada'] = inputCantidad

      if (clientes[key]['cantidadComprada'] > 500) {
        clientes[key]['descuento'] = 15
        output += 'su proximo descuento será del ' + clientes[key]['descuento'] + '%'
      } else if (clientes[key]['cantidadComprada'] > 100) {
        clientes[key]['descuento'] = 10
        output += 'su proximo descuento será del ' + clientes[key]['descuento'] + '%'
      }
      else if (clientes[key]['cantidadComprada'] < 100) {
        output += 'no recibirá descuento'
      }

      if (clientes[key]['cantidadComprada'] > 10) {
        if (clientes[key]['cantidadComprada'] > 15) {
          clientes[key]['tortaExtra'] = Math.floor(clientes[key]['cantidadComprada'] / 15)
          output += ' y recibirá ' + clientes[key]['tortaExtra'] + ' tortas extra'
        }
      }
      else {
        output += ' y no y recibira tortas extra'
      }
    }
    //output = 'dato incorrecto' //esta linea no funciona como se espera

  }
  alert(output)
  setTimeout(() => cakeSell(resolve, reject), 3000)
}

console.log(cakeSell())