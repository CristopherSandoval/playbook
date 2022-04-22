
class pokemon{
    constructor(Pokemon){
        this.Pokemon = Pokemon;
    }
    sayHello(){
        console.log(`Mi pokemon ${this.Pokemon} te saluda`);
    }
    sayMessage(msg){
        console.log(`Mi pokemon ${this.Pokemon} dice: Heey!`);
    }
}

module.exports = pokemon