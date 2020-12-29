let deadpol = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    }
}


let {nombre: primerNombre, apellido: primerApellido, poder} = deadpol;

console.log(primerNombre, primerApellido, poder);