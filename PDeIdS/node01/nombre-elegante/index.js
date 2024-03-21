const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function nombreElegante(nombre){
    let bool=false;
    if(nombre.charAt(0)=== 'a' && nombre.charAt(nombre.length - 1) === 'a'){
        bool = true;
    }
    return bool;
}

rl.question("¿Cual es tú nombre?: ", (nombre) => {
    console.log(nombreElegante(nombre.toLowerCase())); 
    rl.close();
  });