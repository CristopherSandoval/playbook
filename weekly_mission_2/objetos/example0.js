//Objeto vacío.
const myObject = {};
console.log("El primer ejemplo objeto vacío.");
console.log(myObject);
//Objeto con propiedades
const myObject2 = {
    name: "Cristopher",
    age: 21
}
console.log("Ejemplo dos objeto con propiedades");
console.log(myObject2);
// Objecto con diferentes propiedades
const myObject3 = {
    name: "Christian",
    age: "23",
    nicknames: [
        "Christian",
        "Chiwis",
        "mensa"
    ],
    adress: {
        zip_code: "10000",
        street: "Por lagos",
        city: "Monterrey"
    }
}
console.log("Ejemplo 3 objeto con diferentes propiedades");
console.log(myObject3);
console.log(myObject3.adress);
//Objeto con métodos
const pet = {
    name: "Jolie",
    //Función que se guarda como propiedad todavía no entiendo eso
    sayHello: function(){
        //This nme hace referencia a la propiedad del objeto.
        console.log(`${this.name} te saluda en español!`);
    }
}
console.log("Ejemplo 4: Objeto con métodos (facil)");
console.log("no se ocupa poner el console porque viene en el objeto.");
pet.sayHello();

// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Binguillo",
    sayHelloToMyPet: function(yourPet){
        console.log(`${this.name} say¿s hello to ${yourPet}`);
    }
}
console.log("Ejemplo 5: Objeto con método que recibe parametros");
myPet.sayHelloToMyPet("Chacha");