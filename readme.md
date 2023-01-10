# Tech Challenge for Junior
#### Paras las Pruebas 1 y 2 se genero un numero aleatorio por medio de md5hashgenerator. En este caso el numero generado fue el 1
![image](https://user-images.githubusercontent.com/97708522/211629003-882686cd-c9a6-4f64-a52b-faf0b28332d6.png)
#### Cabe recalcar que en los codigos de los puntos 1 y 2 esta parametrisable la variable por lo que a modo de prueba se puede cambiar el numero generado en cualquier momento 
### Instalación modulos
#### Para inicializar los codigos de la prueba es necesario el inicializar el terminal en la carpeta donde se encuentra el proyecto, una vez ahi se debe ejecutar el comando ```npm i```
### Ejecución Programas
#### En el proyecto se encuentran 3 programas que hacen referencia a cada punto del Challenge, para ejecutarlos es necesario escribir en el terminal de proyecto ```node ``` seguido del nomebre del programa a ejecutar. Ej, para ejecutar el punto 1 se escribe en el terminar ```node scriptPunto1.js```, para ejecutar el punto 2 se escribe en el terminar ```node scriptPunto2.js``` y para ejecutar el punto 3 se escribe en el terminar ```node scriptPunto3.js```.
# Solución Punto 1
#### Para iniciar con la solucion del ejercicio se comienza declarando las variables e ingresando numeros a un array que esten entre 1 a 100 para su posterior analisis. Cada uno de los numeros ingrazados en el array se descompone entre unidad , decena y centena, esto con el fin de poder filtar los numeros que sean mayores o iguales al numero obtenido en md5hashgenerator. Posterior al filtrado, se concatenan los numeros que quedaron despues del filtrado para su posterior visualizacion. En dado caso que el filtrado haya eliminado tanto la unidad como la decena y la centena, se implemento una funcion con el fin de poder eliminar el espacio del numero filtrado. 
### Funcionamiento Punto 1
#### Para ejecutar el punto 1 se escribe en el terminar ```node scriptPunto1.js```, posterior a esto se le preguntara al usuario "Que tamaño quiere el array?", en donde el usuario debe ingresar el tamaño que quiere para el ingreso de los datos, es necesario entender que solo es posible ingresar numeros para que el programa funcione. Despues de ingresar el tamaño del arreglo, se le preguntara al usuario "Que Numero desea ingresar en la posicion ?" en donde el usuario puede ingresar numeros desde 1 hasta 999. Finalmente el programa arrojara un array nuevo en donde se observaran de nuevo los numeros filtrando los numeros que sean iguales o superiores al numero generado de forma aleatoria. 
### EJEMPLO Punto 1
#### Teniendo el valor 1 del generado de forma aleatoria, se elige un tamaño de 5 para el arreglo que consta de los numeros [90,120,75,35,2]. Debido a que el filtrado tiene que eliminar los valores que sean superiores al numero generado(en este caso del valor 1), se eliminan todos los numeros iguales y se dejan los valores de 0 del 90 y del 120, obteniendo como resultado [0,0]
![image](https://user-images.githubusercontent.com/97708522/211638514-e97dd180-cd64-4081-8a23-0f4597dc021a.png)

# Solución Punto 2
#### Para iniciar con la solucion del ejercicio se comienza declarando las variables e ingresando numeros a un array tanto positivos como negativos para su posterior analisis. Cada uno de los numeros ingrasados en el array se organizara de forma acendente dependiendo del resultado del cuadrado de cada numero en el arreglo. Finalmente se filtran los numeros del arreglo que sean mayores a numero generado concatenado con el mismo, como por ejemplo si el numero generado es 3, todos los numeros del arreglo iguales o superiores al concatenado del mismo numero (33) seran eliminados. 
### Funcionamiento Punto 2
#### Para ejecutar el punto 2 se escribe en el terminar ```node scriptPunto2.js```, posterior a esto se le preguntara al usuario "Que tamaño quiere el array?", en donde el usuario debe ingresar el tamaño que quiere para el ingreso de los datos, es necesario entender que solo es posible ingresar numeros para que el programa funcione. Despues de ingresar el tamaño del arreglo, se le preguntara al usuario "Que Numero desea ingresar en la posicion ?" en donde el usuario puede ingresar numeros tanto positivos como negativos. Finalmente el programa arrojara un array nuevo en donde se observaran un arreglo de forma acendente teniendo el cuadrado de cada numero ingresado, filtrando los numeros superiores al numero concatenado con el mismo generado de forma aleatoria.
### EJEMPLO Punto 2
#### Teniendo el valor 1 del generado de forma aleatoria, se elige un tamaño de 8 para el arreglo que consta de los numeros [-1,5,3,2,7,3,6,9]. Debido a que el filtrado tiene que eliminar los valores que sean superiores al numero generado concatenado con el mismo (en este caso del valor 1 , se eliminan los valores iguales o superiores a 11), dejando como resultado el cuadrado de los numeros que no superen el valor 11 [1,4,9,9]

![image](https://user-images.githubusercontent.com/97708522/211642642-570f7a4a-1138-4286-8775-4d8abef49dd7.png)



# Solución Punto 3
#### Para iniciar con la solucion del ejercicio se comienza declarando las variables e ingresando el numero de monedas que el usuario va a tener en un array. Estas monedas se van a organizar de forma acendente dependiendo del valor que el usuario le haya dado. Para que se pueda encontrar el minimo valor de cambio que no se posible dar, se comienza realizando una iteración entre todos los elementos del array en donde estan guardadas las monedas empezando por las de menor denominacion, esto con el fin de poder encontrar el minimo cambio posible entre todas ellas.
### Funcionamiento Punto 3
#### Para ejecutar el punto 3 se escribe en el terminar ```node scriptPunto3.js```, posterior a esto se le preguntara al usuario "Cuantas Monedas Tengo?", en donde el usuario debe ingresar el total de las monedas con las que quiere probar el programa, es necesario entender que solo es posible ingresar numeros para que el programa funcione. Despues de ingresar la cantidad de monedas, se le preguntara al usuario "Que valor tiene la moneda ?" en donde el usuario puede ingresar el valor que va a tener la moneda para el ejercicio. Finalmente el programa el programa va a organizar las monedas de forma acendente y va a empezar a iterar entre las monedas para sumarlas y obtener el cambio que es posible dar, para posteriormente coger el minimo valor que no es posible dar de cambio. 
### EJEMPLO Punto 3
#### Para empezar se selecciona cuantas monedas se tienen , en ejemplo se selecciona un total de 7 monedas. Se elige el valor de cada moneda y se guarda en un arreglo que consta de los valores [1,1,5,1,3,2,7]. Se organizan estos valores y el programa empieza a iterar mostrando el valor minimo de cambio que no se puede dar, que en su caso es el valor 21. Al realizar la suma de todos los numeros entre todos, se observa que se pueden generar cambio de 1 hasta 20, sin embargo el numero 21 no se puede hacer, siendo este numero el menor cambio que no se puede hacer.


![image](https://user-images.githubusercontent.com/97708522/211645935-3c8a523e-693c-40a9-87b0-7e5ff9fec493.png)

