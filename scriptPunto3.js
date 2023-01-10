const prompt = require ("prompt-sync")({sigint: true});
var tamañoArray=parseInt(prompt("Cuantas Monedas Tengo ?"));

var vectorEntrada = new Array(tamañoArray);
var vectorSolucion = new Array();
var variableAuxiliar

var cambioMinimo

for(let i = 0; i<tamañoArray; i++){       

    vectorEntrada[i]=parseInt(prompt("Que valor tiene la moneda "+(i+1)+" ?")); 
    
    vectorSolucion[i]=vectorEntrada[i]
   
}

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
    
    cambioMinimo=cambioMinimoPosible(vectorSolucion) 

    console.log("Array Monedas "+ vectorSolucion)
    console.log(cambioMinimo)


 function cambioMinimoPosible(iterable) {
        
    let cambioMaximoCreado = 0;
    for (let monedas of iterable) {
        
      if (monedas > cambioMaximoCreado + 1) {
        return cambioMaximoCreado+ 1        
      }
  
      cambioMaximoCreado += monedas;
    }
    return cambioMaximoCreado + 1
      
  }