const numeroGenerico = 1
const prompt = require ("prompt-sync")({sigint: true});
var tamañoArray=parseInt(prompt("Que tamaño quiere el array? "));

var vectorEntrada = new Array(tamañoArray);
var vectorSolucion = new Array();

var variableAuxiliar


for(let i = 0; i<tamañoArray; i++){       

    vectorEntrada[i]=parseInt(prompt("Que Numero desea ingresar en la posicion "+(i+1)+" ?")); 
    if(vectorEntrada[i]*vectorEntrada[i]>`${numeroGenerico}${numeroGenerico}`){
        

    }else{
        vectorSolucion[i]=vectorEntrada[i]*vectorEntrada[i];
     }       
    
}

filtradoNull(vectorSolucion)

for(let i = 0; i<tamañoArray; i++){ 
    for(let j = 0; j<tamañoArray-1; j++){  
        if(vectorSolucion[j]>vectorSolucion[j+1])
        {
            variableAuxiliar=vectorSolucion[j]
            vectorSolucion[j]=vectorSolucion[j+1]
            vectorSolucion[j+1]=variableAuxiliar
        }
 }

 }

 
console.log("array: "+vectorEntrada)
console.log("newArray: "+vectorSolucion)

 function filtradoNull(num) {
    for(let i = 0; i<num.length; i++){ 

        if(num[i]==null){
            num.splice(i,1);
            i=i-1
    }
}
 }
