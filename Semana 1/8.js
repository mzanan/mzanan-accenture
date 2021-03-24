// Realizar un programa para web (Con interfaz Gráfica)
const validarAlumno = () => {
  for (let i = 0; i < alumnos.length; i++) {
    alumnos[i].legajo = 'A' + String(alumnos[i].curso) + String(alumnos[i].DNI) + '2021'
  }

  const inputNombre = document.getElementById('inputNombre').value.toUpperCase()
  const inputCurso = document.getElementById('inputCurso').value.toUpperCase()
  const inputFecha = document.getElementById('inputFecha').value
  const inputTel = document.getElementById('inputTel').value
  const inputEmail = document.getElementById('inputEmail').value.toUpperCase()
  const inputLegajo = document.getElementById('inputLegajo').value
  const inputDni = document.getElementById('inputDni').value
  let errores = document.getElementById('errores')

  const inputLegajoDni = inputLegajo.slice(2, 10)

  let hayError = true

  for (let key in alumnos) {
    if (inputNombre === alumnos[key]['nombre']) {
      if (inputCurso === alumnos[key]['curso']) {
        const edadCalculada = calcularEdad(inputFecha)
        if (edadCalculada > 18) {
          if (inputTel.length <= 10) {
            if (inputEmail.length <= 50) {
              if (inputLegajoDni == inputDni) {
                error = false
                return error
              } else {
                errores.innerHTML = 'Legajo incorrecto'
              }
            } else {
              errores.innerHTML = 'El email no debe poseer más de 50 caracteres'
            }
          } else {
            errores.innerHTML = 'El número de teléfono no debe poseer más de 10 caracteres'
          }
        } else {
          errores.innerHTML = 'El alumno es menor de 18'
        }
      } else {
        errores.innerHTML = 'El alumno no pertenece al curso'
      }
    } else {
      errores.innerHTML = "Nombre incorrecto"
    }
  }

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

var alumnos = [
  {
    nombre: 'MATIAS ZANAN',
    edad: 24,
    DNI: 39625896,
    fecha: '05/07/1996',
    telefono: 1157567049,
    email: 'matias@gmail.com',
    curso: 'A',
    legajo: ''
  },
  {
    nombre: 'CARLA GALEANO',
    edad: 23,
    DNI: 40123456,
    fecha: '03/08/1997',
    telefono: 1112345678,
    email: 'carla@gmail.com',
    curso: 'B',
    legajo: ''
  },
  {
    nombre: 'FRANK SINATRA',
    edad: 26,
    DNI: 38654321,
    fecha: '02/01/1994',
    telefono: 116541325,
    email: 'frank@gmail.com',
    curso: 'C',
    legajo: ''
  }
]

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
});

document.getElementById('form1').style.visibility = 'hidden'

if (!hayError) {
  document.getElementById('form1').style.dispaly = 'none'
}