// Completar  condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta:
var numero1 = 5;
var numero2 = 8;

if (numero1 < numero2) {
	console.log("numero1 no es mayor que numero2");
}

if (numero2 > 0) {
	console.log("numero2 es positivo");
}

if (numero1 !== 0) {
	console.log("numero1 es negativo o distinto de cero");
}

if (numero1 >= numero2) {
	console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

/*
	A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
	Determinar cual de los dos elementos de texto es mayor
	Determinar el resultado de las cuatro operaciones matemáticas realizadas con los dos elementos numéricos
*/

var valores = [true, 5, false, "hola", "adios", 2]
let suma, resta, mult, div

if (valores[3].length > valores[4].length) {
	console.log("'" + valores[3] + "'" + " es mayor que " + valores[4])
}
else {
	console.log("'" + valores[4] + "'" + " es mayor que " + "'" + valores[3] + "'")
}

suma = valores[1] + valores[5]
resta = valores[1] - valores[5]
mult = valores[1] * valores[5]
div = valores[1] / valores[5]

console.log("suma: " + suma)
console.log("resta: " + resta)
console.log("multiplicacion: " + mult)
console.log("division: " + div)

function compararStrings(valores) {
	let newArr = []
	let aux = ""

	for (let i = 0; i < valores.length; i++) {
		if (typeof (valores[i]) === 'string') {
			newArr.push(valores[i])
		}
	}

	for (let i = 0; i < newArr.length; i++) {
		if (newArr[i].length > aux.length) {
			aux = newArr[i]
		}
	}
	return aux
}
console.log(compararStrings([true, 5, false, "hola", "adios", 2]))


/* 
	Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
	A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
	sólo por minúsculas o por una mezcla de ambas.
*/
const cadenaTexto = (str) => {
	let chars = str.split('')
	let countMinus = 0
	let countMayus = 0

	for (let i = 0; i < chars.length; i++) {
		if (chars[i] === chars[i].toLowerCase()) {
			countMinus++
		}
		else if (chars[i] === chars[i].toUpperCase()) {
			countMayus++
		}
	}

	if (countMayus > 0 && countMinus === 0) { return "La cadena está formada sólo por mayúsculas" }
	else if (countMinus > 0 && countMayus === 0) { return "La cadena está formada sólo por minúsculas" }
	else if (countMinus > 0 && countMayus > 0) { return "La cadena está formada por mayúsculas y minúsculas" }

}

console.log(cadenaTexto("hola"))