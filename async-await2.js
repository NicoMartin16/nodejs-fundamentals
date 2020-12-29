let empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Melissa",
  },
  {
    id: 3,
    nombre: "Juan",
  },
];

let salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 2000,
  },
];

let getEmpleado = async (id) => {
  let empleadoDB = empleados.find((empleado) => {
    return empleado.id === id;
  });

  if (!empleadoDB) {
    throw new Error(`No existe un empleado con id ${id}`);
  } else {
    return(empleadoDB);
  }
};

let getSalario = async(empleado) => {
    let salariosDB = salarios.find((salario) => {
      return salario.id === empleado.id;
    });

    if (!salariosDB) {
      throw new Error(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
      return({
        id: empleado.id,
        nombre: empleado.nombre,
        salario: salariosDB.salario,
      });
    }
};

let getInformacion = async (id) => {
  let empleado = await getEmpleado(id);
  let salario = await getSalario(empleado);
  return `${salario.nombre} tiene un salario de $ ${salario.salario}`;
};

getInformacion(10)
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((err) => console.log(err));
