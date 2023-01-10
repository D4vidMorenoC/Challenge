const numeroGenerico = 1
const prompt = require ("prompt-sync")({sigint: true});
var tamañoArray=parseInt(prompt("Que tamaño quiere el array?"));

var vectorEntrada = new Array(tamañoArray);
var vectorSolucion = new Array();

var Decenas = new Array(tamañoArray);
var unidad = new Array(tamañoArray);
var centena = new Array(tamañoArray);

for(let i = 0; i<tamañoArray; i++){       

    vectorEntrada[i]=parseInt(prompt("Que Numero desea ingresar en la posicion "+(i+1)+" ?")); 
   

    unidad[i]=vectorEntrada[i]%10;
    Decenas[i]= Math.trunc((vectorEntrada[i]/10)%10);
    centena[i]= Math.trunc((vectorEntrada[i]/100)%100);  
     

    if(unidad[i]< numeroGenerico){
        vectorSolucion[i]=unidad[i]
    }

    if(Decenas[i]< numeroGenerico && Decenas[i]!== 0 && vectorSolucion[i]!= null){
        vectorSolucion[i]=`${Decenas[i]}${vectorSolucion[i]}`    
    }else if(Decenas[i]< numeroGenerico && Decenas[i]!== 0){
        vectorSolucion[i]=Decenas[i]
    
    }else if(centena[i]!=0 && Decenas[i]==0 && vectorSolucion[i]!= null){
        vectorSolucion[i]=`${Decenas[i]}${vectorSolucion[i]}`    
    }else if(centena[i]!=0 && Decenas[i]==0){
        vectorSolucion[i]=Decenas[i]        
    }

    if(centena[i]< numeroGenerico && centena[i]!== 0 && vectorSolucion[i]!= null){
        vectorSolucion[i]=`${centena[i]}${vectorSolucion[i]}`
    }else if(centena[i]< numeroGenerico && centena[i]!== 0){
        vectorSolucion[i]=centena[i]
    }
}

filtradoNull(vectorSolucion)

console.log("vectorEntrada: "+vectorEntrada)
console.log("vectorSolucion: "+vectorSolucion)


function filtradoNull(num) {
    for(let i = 0; i<num.length; i++){ 

        if(num[i]==null){
            num.splice(i,1);
            i=i-1
    }}
 }

