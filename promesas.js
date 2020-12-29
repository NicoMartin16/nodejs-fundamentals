let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id:3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        });
    
        if(!empleadoDB) {
            reject(`No existe un empleado con id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salariosDB = salarios.find(salario => {
            return salario.id === empleado.id
        });
    
        if(!salariosDB) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre, 
                salario: salariosDB.salario,
            });
        }
    })

}

getEmpleado(4).then((empleado) => {
    return getSalario(empleado); 
})
.then((res) => {
    console.log(`El salario de ${res.nombre} es de ${res.salario}`);
})
.catch((err) => {
    console.log(err);
});