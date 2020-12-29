
// setTimeout(function(){
//     console.log('Hola mundo');
// }, 3000)

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    };

    if(id === 20){
        callback(`Èl usuario con id ${id}, no existe en la BD`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(1, (err, usuario) => {
    if(err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});
