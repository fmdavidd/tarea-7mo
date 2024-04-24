function myFunction() {
    let frase = document.forms["form"]["frase"].value;
    console.log(frase);
    frase += " ";
    let nP="";
    let fraseVector=[];
    let nuevaFrase = [];
    for(let i = 0; i < frase.length; i++){   
        if(frase[i] !=){
            if(frase[i] == " "){
                fraseVector.push(nP);
                nP="";
            }else{
                nP+=frase[i];
            }
        }
        
    }
    for(let i = 0; i < fraseVector.length; i++){   
        nuevaFrase.push(Comprobar(fraseVector[i]));
    }
    alert(nuevaFrase.join(" "));
}
function Comprobar(palabra){
    let unirArreglo = palabra;
    for(let a=0; a<palabra.length;a++){
        if(palabra[a]=="("){
            let p1 = palabra.slice(1,-1);
            let separarCadena = p1.split("");
            let invertirArreglo = separarCadena.reverse();
            unirArreglo = invertirArreglo.join("");
        }
    }
    return(unirArreglo);
}