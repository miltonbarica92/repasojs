// Template strings

const nombre = 'Milton';
let trabajo = 'Data Scientist';

// Concatenar Javascript (ANTES)
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);

// AHORA
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// Concatenar con multiples lineas (ANTES)
const contenedorApp = document.querySelector('#app');
// let html = '<ul>' +
//                 '<li>Nombre: ' + nombre + '</li>' +
//                 '<li>Trabajo: ' + trabajo + '</li>' +
//             '</ul>';

// AHORA
let html = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>`;
contenedorApp.innerHTML = html;
