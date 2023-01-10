# Tech Challenge for Junior
### Paras las Pruebas 1 y 2 se genero un numero aleatorio por medio de md5hashgenerator. En este caso el numero generado fue el 1
![image](https://user-images.githubusercontent.com/97708522/211629003-882686cd-c9a6-4f64-a52b-faf0b28332d6.png)
### Cabe recalcar que en los codigos de los puntos 1 y 2 esta parametrisable la variable por lo que a modo de prueba se puede cambiar el numero generado en cualquier momento 
## Instalación modulos
### Para inicializar los codigos de la prueba es necesario el inicializar el terminal en la carpeta donde se encuentra el proyecto, una vez ahi se debe ejecutar el comando ```npm i```
##Ejecución Programas
### En el proyecto se encuentran 3 programas que hacen referencia a cada punto del Challenge, para ejecutarlos es necesario escribir en el terminal de proyecto ```node ``` seguido del nomebre del programa a ejecutar. Ej, para ejecutar el punto 1 se escribe en el terminar ```node scriptPunto.js```, para ejecutar el punto 2 se escribe en el terminar ```node scriptPunto2.js``` y para ejecutar el punto 3 se escribe en el terminar ```node scriptPunto3.js```.
# Solución Punto 1
###Para iniciar con la solucion del ejercicio se comienza declarando las variables e ingresando numeros a un array que esten entre 1 a 100 para su posterior analisis. Cada uno de los numeros ingrazados en el array se descompone entre unidad , decena y centena, esto con el fin de poder filtar los numeros que sean mayores o iguales al numero obtenido en md5hashgenerator. Posterior al filtrado, se concatenan los numeros que quedaron despues del filtrado para su posterior visualizacion. En dado caso que el filtrado haya eliminado tanto la unidad como la decena y la centena, se implemento una funcion con el fin de poder eliminar el espacio del numero filtrado. 
## Funcionamiento Punto 1
###Para ejecutar el punto 1 se escribe en el terminar ```node scriptPunto.js```, posterior a esto se le preguntara al usuario "Que tamaño quiere el array?", en donde el usuario debe ingresar el tamaño que quiere para el ingreso de los datos, es necesario entender que solo es posible ingresar numeros para que el programa funcione. Despues de ingresar el tamaño del arreglo, se le preguntara al usuario "Que Numero desea ingresar en la posicion ?" en donde el usuario puede ingresar numeros desde 1 hasta 999. Finalmente el programa arrojara un array nuevo en donde se observaran de nuevo los numeros filtrando los numeros que sean iguales o superiores al numero generado de forma aleatoria. 
## EJEMPLO Punto 1
###Teniendo el valor 1 del generado de forma aleatoria, se elige un tamaño de 5 para el arreglo que consta de los numeros [90,120,75,35,2]. Debido a que el filtrado tiene que eliminar los valores que sean superiores al numero generado(en este caso del valor 1), se eliminan todos los numeros iguales y se dejan los valores de 0 del 90 y del 120, obteniendo como resultado [0,0]
![image](https://user-images.githubusercontent.com/97708522/211638514-e97dd180-cd64-4081-8a23-0f4597dc021a.png)
# Solución Punto 2
###### Headline H6
