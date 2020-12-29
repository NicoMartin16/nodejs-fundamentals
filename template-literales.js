
let nombre = 'DeadPool';
let real = 'Wade winston';

console.log(nombre + ' ' +  real);
console.log(`El nombre de ${nombre} es ${real}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;
console.log(nombreCompleto === nombreTemplate);

function getNombre(){
    return `${nombre} ${real}`;
}

console.log(`El nombre de  ${getNombre()}`);