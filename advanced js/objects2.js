let Dog = {
    _name: 'Halley',
    _behavior: 0 ,

    name: function(){
        console.log(this._name)
    }
}

Dog.name();
