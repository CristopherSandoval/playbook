class Person {

};
console.log("Ejemplo 1: crear una clase vacía");
console.log(Person);

// Crea un objeto a partir de una clase
class Pet {

};
const myPet1 = new Pet(); //SE PUEDEN CREAR MUCHOS OBJETOS DE LA CLASE PET
console.log("Ejemplo 2");
console.log(myPet1);

// Ejemplo 3: Instanciar un objeto con atributos

class Student {
    // El contrusctor que nos permite instanciar un objeto y asignarle atributos es this.
    constructor(name, age, subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}
// Crear un objeto de la clase student (esto se llama instanciación)
const cristopherStudent = new Student("Cristopher", 21, ["NodeJs", "Python"]);
console.log("Ejemplo 3: Instanciar un objeto con atributos");
console.log(cristopherStudent);
// Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }
    getInfo(){
        return `Repository ${this.name} has ${this.stars} stars`
    }
}
console.log("Ejemplo 4: Métodos en los objetos");
const myRepo = new Repository("LaunchX", "Cristopher", "js", 100);
console.log(myRepo.getInfo());
// Ejemplo 5: Atributos con valores por default
class PullRequest {
    constructor(repo, title, lines_changed, status, dateCreated){
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed
        this.status = "OPEN"
        this.dateCreated = new Date() //Esto guarda la fecha actual en la que se instancia el objeto.
    }
    getInfo(){
        return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
      }
}
console.log("Ejemplo 5: Atributos con valores por default");
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100);
console.log(myPR1.getInfo());
// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo());

class Ajolonauta {
    constructor(name, age, stack){
        this.name = name
        this.age = age
        this.stack = stack
        this.exercises_completed = 10
        this.exercises_todo = 99
    }

    // atributos de la clase
    get getExercisesCompleted() {
        return this.exercises_completed

    }
}
console.log("Ejemplo 6: Getters para acceder a los atributos del objeto");
const woopa = new Ajolonauta("Woopa", 21, []);
console.log(woopa.getExercisesCompleted);

//Setters para modificar los atributos del objeto

class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }
    get getstudent(){
        return this.students
    }
    get getlives(){
        return this.lives
    }
    set setStudents(students){
        this.students = students
    }
    set setLives(lives){
        this.lives = lives
    }
}
console.log("Ejemplo 7: Setters para modificar los atributos del objeto.");
const missionCommanderNode = new MissionCommander("Carlo", "NodeJS");
console.log(missionCommanderNode.getstudent);
console.log(missionCommanderNode.getlives);
// Actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100;
missionCommanderNode.setLives = 3;
console.log(missionCommanderNode.getstudent);
console.log(missionCommanderNode.getlives);

// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin encesidad de instanciar algún objeto
class Toolbox {
    static getMostUsefulTools(){
        return ["Command line", "git", "Text Editor"];
    }
}
console.log("Ejemplpo 8: Métodos static");
// Puedo llamar el método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools());
// Si intentamos instanciar un objeto, no podremos llamar este método static
//const toolbox = new Toolbox()
//console.log(toolbox.getMostUsefulTools()) // is not a function

// HERENCIA
// Ejemplo 9: Herencia entre dos clases
class Developer {
    constructor(name, mainLang, stack){
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }
    get getName(){
        return this.name
    }
}
console.log("Ejemplo 9: Herencia entre dos clases");
const carloDev = new Developer("Carlo", "js", ["elexir", "groovy", "lisp"]);
console.log(carloDev);
// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchX extends Developer{

}
const carloLaunchXDev = new LaunchX("Carlo", "js", ["Elexir", "Groovy", "lisp"]);
console.log(carloLaunchXDev);
console.log(carloLaunchXDev.getName);

// Overrinding methods

class Explorer{
    constructor(name, username, mission){
        this.name = name
        this.username = username
        this.mission = mission
    }
    getNameAndUsername(){
        return `Explorer ${this.name}, username: ${this.username}`;
    }
}
class Viajero extends Explorer {
    constructor(name, username, mission, cycle){
        super(name, username, mission)
        this.cycle = cycle // agreganis este atributo de la clase Viajero, es exlcusiva de esta clase y no de la clase padre

    }
    getGeneralInfo(){
        let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre
        // nameAndUsername es una variable de esta función, no necesitas suar this para referenciarla.
        return `${nameAndUsername}, Ciclo ${this.cycle};`
    }
}

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) // Método de la clase hija