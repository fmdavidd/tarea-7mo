const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function idiomaP(palabra){
    let nuevaPalabra="";

    for(let i=0; i<palabra.length;i++){
        if(palabra.charAt(i)=="a"||palabra.charAt(i)=="e"||palabra.charAt(i)=="i"||palabra.charAt(i)=="o"||palabra.charAt(i)=="u"){
            nuevaPalabra+=palabra.charAt(i)+"p"+palabra.charAt(i);
        }else{
            nuevaPalabra+=palabra.charAt(i);
        }
    }
    return nuevaPalabra
}

rl.question("¿Cual es la palabra?: ", (palabra) => {
    console.log(idiomaP(palabra.toLowerCase())); 
    rl.close();
  });