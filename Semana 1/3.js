/*
Ejercicio 1.
Simular lanzamiento de un dado, si el valor es menor a 3 mostrar mensaje A sino mostrar un mensaje B. 
El mensaje se debe insertar desde .js al elemento body del DOM.
*/

let dados = () => {
	let randomNumber = Math.floor(Math.random() * 6) + 1

	if (randomNumber < 3) {
		return 'Numero menor a 3'
	}
	return 'Numero mayor a 3'
}

/*
Ejercicio 2.
Realizar la lógica para una web de venta de coches: Si el coche a la venta es un Ford Fiesta (Código: 11450 Precio $1.350.344), el descuento es del 5%. 
Si el coche a la venta es un Ford Focus (Código: 11451 Precio $1.750.502, el descuento es del 10%. 
El usuario ingresa el articulo o su código y el sistema saca el descuento, el valor total y el código correspondiente por pantalla.
*/

const discounts = () => {
	data = {
		'cars': [
			{
				'id': 11450,
				'model': 'Ford Fiesta',
				'price': 1350344,
				'discount': 5
			},
			{
				'id': 11451,
				'model': 'Ford Focus',
				'price': 1750502,
				'discount': 10
			}
		]
	}

	let message = ''
	const cars = data['cars']
	const input = prompt('Ingrese articulo o codigo de producto')

	for (let car in cars) {
		if (String(input) === cars[car].model || Number(input) === cars[car].id) {
			const id = cars[car].id
			const model = cars[car].model
			const price = cars[car].price
			const disc = ((cars[car].discount * cars[car].price) / 100)
			const priceWithDisc = price - disc

			return message = 'Modelo: ' + model + ', codigo: ' + id + ', precio sin descuento: ' + price + ', precio con descuento: ' + priceWithDisc
		}
	}
	return 'Dato invalido'
}
console.log(discounts())
/*
Ejercicio 3.
Un alumno desea saber ¿cuál será su calificación final en una materia específica?, dicha calificación se compone de los siguientes porcentajes:
•	55% del promedio de las tres calificaciones parciales.
•	30% de la calificación del examen final.
•	15% de la calificación de un trabajo final.
*/

const calcular = () => {
	const tCP1 = parseInt(document.getElementById('tCP1').value)
	const tCP2 = parseInt(document.getElementById('tCP2').value)
	const tCP3 = parseInt(document.getElementById('tCP3').value)
	const final = parseInt(document.getElementById('tEF').value)
	const trabajo = parseInt(document.getElementById('tTF').value)

	const promedio = (tCP1 + tCP2 + tCP3) / 3

	document.getElementById("tPro").value = promedio
	document.getElementById("tPar").value = (55 * promedio) / 100
	document.getElementById("tPEF").value = (30 * final) / 100
	document.getElementById("tPTF").value = (15 * trabajo) / 100
	document.getElementById("tCF").value = ((55 * promedio) / 100 + (30 * final) / 100 + (15 * trabajo) / 100)
}

/*
Ejercicio 4.
Supongamos que se desea invertir una cantidad X de pesos en un sistema de ahorro que otorga el 33.5% Anual de interés efectivo, realice un programa que informe ¿cuál es el interés en pesos que se va a ganar por mes? y ¿cuál es el total que debe recibirse por 3 meses?
*/

const intereses = dinero => {
	const interesAnual = 33.5
	const interesMensual = interesAnual / 12
	const interesTrimestre = interesMensual * 3

	let interesGanadoMensual = ((interesMensual * dinero) / 100).toFixed(2)
	let interesGanadoTrimestre = ((interesTrimestre * dinero) / 100).toFixed(2)

	return "El interés ganado mensual será " + interesGanadoMensual + ", y el trimestral, " + interesGanadoTrimestre + " pesos"
}

console.log(intereses(100))

/*
Ejercicio 5.
El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
El array de letras es:
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:

1.	Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.
2.	En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
3.	Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
4.	Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
*/

const calcularDni = () => {
	let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
	let dniUsuario = prompt("Ingrese numero de dni")
	let letraUsuario = prompt("Ingrese letra de dni")

	if (!isNaN(dniUsuario) && dniUsuario > 0 && dniUsuario < 99999999 && letraUsuario.match(/^[a-zA-Z]+$/i)) {
		const resto = dniUsuario % 23

		if (letraUsuario.toUpperCase() === letras[resto]) {
			return "datos correctos"
		}
		return "los valores no coinciden"

	}
	return "datos invalidos"
}
console.log(calcularDni())

/*
Ejercicio 6.
Construir un validador para un formulario de registro que, dado el HTML que se proporciona, valide cada uno de los campos cuando el usuario ha terminado de introducir datos en cada uno de ellos, es decir, al perder el foco. Si el campo no cumple las restricciones, se mostrará una alerta al usuario, pero se le permitirá seguir introduciendo datos en el resto de campos.
En el momento en el que el usuario envíe el formulario (evento submit), se validarán todos los campos y el formulario no se enviará si alguno de los campos no es válido. Las restricciones a cumplir son las siguientes:
•	El nombre, email y comentarios son campos obligatorios.
•	El campo email debe ser una dirección de email válida.
•	El texto introducido en el campo de comentarios no debe exceder los 50 caracteres.
•	El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.
*/

const validador = (() => {
	const validatePassword = () => {
		if (!password.value.match(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/)) {
			alert('La contraseña debe contener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito')
		}
	}

	const commentBox = document.getElementById("registro_comentarios")
	const password = document.getElementById("registro_password")

	password.addEventListener("blur", validatePassword)
	commentBox.addEventListener("blur", () => { })
})()

/*
Ejercicio 7.
Crear un script que genere un numero al azar entre 0 y 2, debe utilizar Promise para procesar el resultado: un error si el numero generado es 0 y un mensaje de ejecución correcta en caso contrario.
 */

const random = () => {
	let randomNumber = Math.floor(Math.random() * 3)
	if (randomNumber === 0) {
		throw new Error("El numero es 0")
	}
	return 'Ejecucion correcta'
}

new Promise(function (resolve, reject) {
	setTimeout(() => {
		try {
			let validateRandom = random()
			resolve(validateRandom)
		}
		catch (error) { reject(err) }
	}, 1000)
})

console.log(random())

/*
Ejercicio 8.
Crear un script que permita el ingreso de valores para cargar un array y espere 3 segundos por cada carga, debe utilizar Promise para procesar el resultado: error si no se cargó un valor en el array y un mensaje de ejecución correcta junto con los valores del array en caso contrario.
*/

const cargaValores = (resolve, reject, arr = []) => {
	let numero = prompt("Ingrese un numero. 999 para finalizar.")

	if (isNaN(numero) || numero == null) {
		return reject("Numero invalido o nulo")
	}
	if (parseInt(numero) == 999) {
		return resolve(arr)
	}
	arr.push(numero)

	setTimeout(() => cargaValores(resolve, reject, arr), 3000)
}

const promiseArray = new Promise(cargaValores)

promiseArray
	.then(console.log)
	.catch(console.error)

/*
Ejercicio 9.
Replicar el ejercicio 8 pero usando async/await para su solución.
*/

const cargaMasValores = (resolve, reject, arr = []) => {
	let numero = prompt("Ingrese un numero. 999 para finalizar.")

	if (isNaN(numero) || numero == null) {
		return reject("Numero invalido o nulo")
	}
	if (parseInt(numero) == 999) {
		return resolve(arr)
	}
	arr.push(numero)

	setTimeout(() => cargaMasValores(resolve, reject, arr), 3000)
}

const promiseArray = new Promise(cargaMasValores)
const resultado = await promiseArray

console.log(resultado)