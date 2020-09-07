// crear variables

// variables con var
var aprendiendo = 'Javascript';


// variables con const
const aprendiendo2 = 'VarConst';

// variables con let
let aprendiendo3;
aprendiendo3 = 55;

console.log(aprendiendo);
console.log(aprendiendo2);
console.log(aprendiendo3);

// Scope con var
// var musica = 'Rock';
// if(musica) {
//     var musica = 'Grunge';
//     console.log('dentro del if ', musica)
// }
// console.log('Fuera del if', musica)

// Scope con let/const
let musica = 'Rock';
if(musica) {
    let musica = 'Grunge';
    console.log('dentro del if', musica)
}
console.log('Fuera del if', musica)
