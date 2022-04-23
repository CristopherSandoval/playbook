// Primero ejemplo for each
const numbers = [1, 2, 3, 4, 5];
console.log("Ejemplo 1: Imprimiendo elementos de una lista");
numbers.forEach(num => console.log(num));

// for each para calcular la suma de todos los elementos
let sum = 0
const numeros = [1, 3, 5];
console.log("Ejemplo 2: Calculando la suma de todos los elementos");
numeros.forEach(num => sum += num);
console.log(sum);

// For each para imprimir los países en las letras mayúsculas.
const countries = ["Finland", "denmark", "Sweden", "Norway", "Iceland"];
console.log("Ejemplo 2: Imprimiendo la lista de los países en mayúsuclas");
countries.forEach((element) => console.log(element.toUpperCase()));

// Uso de map para recorrer los elementos de una lista y crear una nueva lista
const numbers4 = [1, 2, 3, 4, 5];
const numberSquare = numbers4.map(function(num){return num * num});
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado");
console.log(numberSquare);
// Uso de map para convertir todos los nombres en mínusculas 
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const namesToUpperCase = names.map((name) => name.toLowerCase());
console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas");
console.log(namesToUpperCase);
// Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const countriesFirstThreeLetters = countries6.map((countrie)=> countrie.toUpperCase().slice(0, 3));
console.log("Uso de map para convertir las primeras tres letras en mayúsculas.");
console.log(countriesFirstThreeLetters);
// Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const onlywithland = countries7.filter((country)=> country.includes('land'));
console.log("ejemplo 7");
console.log(onlywithland);
const countryendwithia = countries7.filter((country) => country.endsWith('nd'));
console.log(countryendwithia);
//es para ver cual contiene que palabra.

// Ejemplo 8: Filtrar una lista por condicional 
const scores = [
    { name: 'A', score: 95},
    { name: 'L', score: 98},
    { name: 'M', score: 80},
    { name: 'E', score: 50},
    { name: 'M', score: 85},
    { name: 'J', score: 100},
];
console.log(scores);
const scoresGreaterEighty = scores.filter((score)=> score.score > 80);
console.log("ejemplo 8");
console.log(scoresGreaterEighty);
// Ejemplo 9: Uso del reduce
const numbers9 = [1, 2, 3, 4, 5];
const result_of_reduce = numbers9.reduce((acc, element)  => acc + element, 0);
console.log("Ejemplo 9: uso de reduce para calcuclar la suma de los elementos de una lista");
console.log(result_of_reduce);

//Ejemplo 10: Uso de every nos ayuda a validar los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4'];
const areAllStr = names10.every((name) => typeof name === 'string');
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr);
console.log(areAllStr);

// Uso de find para encontrar el primer elemento de una lista que cumpla con lo que se indica
const ages = [24, 22, 19, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);
console.log("Ejemplo 11: Primer edad menor a 20 es: " + age);
//uso de find en una lista de objetos
const scores12 = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
];
const score_less_than_80 = scores12.find((user) => user.score > 80);
console.log("Ejemplo 12. name score found " + score_less_than_80.name);

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3'];
const result = names13.findIndex((name) => name.length > 7);
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result);

//Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.
// lista de elementos
const bools = [true, true, false, true];
// Uso de some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) => b === false);
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue);

// Ejemplo 15: Uso de sort para ordenar los elementos

const productos = ['Milk', 'Coffe', 'Sugar', 'Honey', 'Apple', 'Carrot'];
console.log("Ejemplo 15: Elementos ordenados usando SORT");
console.log(productos.sort());

// Ejemplo 16: Ordenando una lista de objetos
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
];
users.sort((a, b)=> {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad");
console.log(users);

