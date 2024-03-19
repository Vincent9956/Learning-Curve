class Animal{
    constructor(name){
        this._name = name;
        this._behavior = 0; 
    }
    static generateName(){
        const names = ['Angel', 'Spike','Buffy','Willow','tara',];
        const rdnNum = Math.floor(Math.random()*5);
        return names[rdnNum];
    }
}

for(let i = 0; i<5; i++)
console.log(Animal.generateName());

