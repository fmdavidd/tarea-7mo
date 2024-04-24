let s = "100_200_50_330_250_180_190_200_150_90_165_240_20_340_";

function separarNumeros(String){
    let a = [];
    let p = "";
    for(let i = 0; i<String.length ; i++){
        p+=String[i];
        if(String[i] == "_"){
            let np = p.slice(0 , -1);
            a.push(parseInt(np));
            np = "";
            p="";
        }
    }
    return a;
}
let aN = separarNumeros(s);
function cualCuadrante(a){
    c = [];
    for(let i = 0; i<14;i++){
        if(a[i] <= 135 && a[i] >= 45){
            c.push("N")
        }
        if(a[i] <= 44 && a[i] >= 0){
            c.push("E")
        }
        if(a[i] <= 360 && a[i] >= 315){
            c.push("E");
        }
        if(a[i] <= 314 && a[i] >= 225){
            c.push("S");
        }
        if(a[i] <= 224 && a[i] >= 135){
            c.push("O");
        }
    }
    return c;
}
let ArrayInfo = cualCuadrante(aN);
mostrarArray(ArrayInfo);
function mostrarArray(a){
 let s = "";
 for(let i = 0; i<a.length ; i++){
    s += a[i]+" ";
 }
 document.body.innerHTML = "Cuadrantes = " +s;
}