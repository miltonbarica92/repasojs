// creando una funcion

// Function declaration (Se leen antes de ejecución, por eso se les puede llamar antes)
// saludar('LOL');
// function saludar(nombre){
//     console.log(`Bienvenido ${nombre}`);
// }
// saludar('Milton');
// saludar();

// Function Expression (1ro declara --> 2do usar)
const cliente = function(nombreCliente){
    console.log(`Mostrando nombre del cliente: ${nombreCliente}`);
}
cliente('Juan');

// Default parameters
// function actividad(nombre='Pedro', actividad='Picar piedra'){
//     console.log(`La persona ${nombre} realiza la actividad ${actividad}`);
// }
// actividad('Juan', 'Aprender JS');
// actividad();
// actividad('Quimicholo');

const activ = function(nombre='Marito', actividad='Hacer Streaming'){
    console.log(`La persona ${nombre} realiza la actividad ${actividad}`);
}
activ();
activ('El Pato')

// Arrow Functions
let viajando = function(destino){
    return `Viajando a la ciudad de: ${destino}`;
}
let viaje;
viaje = viajando('Roma');
viaje = viajando('Lima');
console.log(viaje);

// let viajando2 = (destino, dias='n') => {
//     return `Viajando a la ciudad de: ${destino} por ${dias} dias`;
// }
let viajando2 = (destino, dias='n') => `Viajando a la ciudad de: ${destino} por ${dias} dias`;
viaje = viajando2('Arrowlandia');
console.log(viaje);
viaje = viajando2('Jeepeta', 5);
console.log(viaje);