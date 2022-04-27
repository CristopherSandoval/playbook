import {explorers} from "./ejercicio2.js";
// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach((element) => console.log(element.name));
// Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach((element)=> console.log(element.stack));
// CON NAME 
explorers.forEach((element)=> console.log(element.name, element.stack));
// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const explorerStack = explorers.map(element => element.stack)
console.log(explorerStack)
// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const conjs = explorers.filter((js) => js.stack.includes("js"));
console.log(conjs);
// Busca el primer explorer que sea de la CDMX, usa FIND
const cdmx = explorers.find((deCdmx) => deCdmx.city == "CDMX");
console.log(cdmx);
// Obtén la suma de todos los exercises_completed, usa REDUCE
const result_of_reduce = explorers.reduce((acc, element)  => acc + element.exercises_completed, 0);
console.log(result_of_reduce);
// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const some = explorers.some((b)=> b.missions.frontend.isFinished === true);
console.log(some);
// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const finishedOnboarding = explorers.every((explorers) => explorers.missions.onboarding.isFinished === true)
console.log(finishedOnboarding)