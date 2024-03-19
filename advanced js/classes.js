class Dog {
    constructor(name, breed, ){
        this._name = name;
        this._behavior = 0;
        this._breed = breed     
    }    
    incremenbehav(){
        this._behavior ++;
    }
    makesound(){
        if (this._behavior ==  0){
            console.log("This is a quiet breed, they dont make sounds")
        }else {
            console.log("Arf arf")
        }        
    }
}
const Halley = new Dog('Halley', 'German shepherd');
console.log(Halley._name);
Halley.incremenbehav();
Halley.makesound();
//---------------------------------------------------------------------------------------------

//Why create Methods that get names if  you can just log it like above ?

//---------------------------------------------------------------------------------------------

class employee {
    constructor(firstname, lastname, wageclass, position){
        this._firstname = firstname;
        this._lastname = lastname; 
        this._wageclass = wageclass; 
        this._postion = position; 
    }
    get fullname(){
        return this._firstname + ' ' + this._lastname;
    }
    // different way of getting the fullname
    fullnam(){
        return this._firstname + ' ' + this._lastname;
    }
    get earned(){
        if (this._wageclass > 3){
            return '52.000$ per year'
        }else {
            return 'Below 45.000$ per year'
        }
    }
}
const Bob = new employee('Bob','Marley', 0 , 'Singer')
console.log(Bob.fullname);
console.log(Bob.fullnam());
console.log(Bob.earned);

