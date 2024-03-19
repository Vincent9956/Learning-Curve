class Animal{
    constructor(name){
        this._name = name;
        this._behavior = 0; 
    }
    get name(){
        return this._name;
    }
    get behavior(){
        return this._behavior;
    }
    incrementBehavior(){
        this._behavior++;
    }
}

class  Cat extends Animal{
    constructor(name, usesLitter){
        super(name);
        this._usesLitter = usesLitter;
    }
    get usesLitter(){
        return this._usesLitter;
    }
}


const CatBrandon = new Cat('Brandon', 'Uses Litter ')
CatBrandon.incrementBehavior();
console.log(CatBrandon.behavior);
console.log(CatBrandon.name)
console.log(CatBrandon.usesLitter);