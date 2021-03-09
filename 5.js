// Crear un programa para gestionar usuarios.

//  --> no se cómo hacer para que los prompts espere a que el usuario ingrese datos. Se cierran muy rápido.

const dataUsers = data => { //funcion principal
  const opciones = prompt('Ingrese el número de opción: 1. buscar usuario, 2. listar usuarios, 3: salir').trim()

  if (opciones) {
    switch (parseInt(opciones)) {
      case 1:
        buscarUsuario(data)
        break

      case 2:
        listarUsuarios(data)
        break

      case 3:
        salir()
        break

      default:
        alert('Dato erroneo')
        break
    }
  }
}

const buscarUsuario = data => {
  const busqueda = confirm('¿Desea realizar una búsqueda?')
  if (busqueda) {
    const tipoDato = (prompt('Indique tipo de dato: id, nombre, telefono o email')).toLowerCase().trim()
    const inputValor = (prompt('Ingrese el valor a buscar')).trim()

    switch (tipoDato) {
      case 'nombre':
        const capitalizeInput = inputValor.charAt(0).toUpperCase() + inputValor.toLowerCase().slice(1)

        mostrarInfo(data, tipoDato, capitalizeInput)
        break

      case 'id':
      case 'telefono':
      case 'email':
        mostrarInfo(data, tipoDato, inputValor)
        break

      default:
        alert('Dato erroneo')
        break
    }
  }
  else {
    dataUsers(data)
  }
  buscarUsuario(data)
}

const listarUsuarios = data => { // no supe reutilizar la funcion mostarInfo
  let output = ''
  for (let key in data) {
    output += (Object.entries(data[key]).join('; ')) + '\n'
  }
  alert(output)
  dataUsers(users)
}

const salir = () => {
  alert('Gracias por utilizar nuestro servicio.')
}

const mostrarInfo = (data, tipoDato, input) => {
  for (let key in data) {
    if (data[key][tipoDato] == input) {
      alert(Object.entries(data[key]).join(', '))
    }
  }
}

const users = [
  {
    id: 0,
    nombre: 'Carla',
    telefono: 1545628984,
    email: 'carla@gmail.com'
  },
  {
    id: 1,
    nombre: 'Pedro',
    telefono: 1545251245,
    email: 'pedro@gmail.com'
  },
  {
    id: 2,
    nombre: 'Lucas',
    telefono: 1523357849,
    email: 'lucas@gmail.com'
  },
  {
    id: 3,
    nombre: 'Ana',
    telefono: 15789456,
    email: 'ana@gmail.com'
  }
]
console.log(dataUsers(users))
