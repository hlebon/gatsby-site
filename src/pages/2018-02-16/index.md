---
id: "2"
path: "/introduccion-a-react"
titleid: "introduccion-a-react"
date: "2018-02-16T01:12:33.962Z"
title: "Introducción a React: Qué es React.js"
tags: ['react,','intro,','jsx,', "javascript"]
excerpt: "React es una librería javascript muy poderosa, creada por facebooks que nos permite crear aplicaciones web..."
author: "Hans García"
---

React es una librería javascript muy poderosa que nos permite crear aplicaciones web. Tambien esta [react-native](https://facebook.github.io/react-native/) que esta enfocada en crear aplicaciones moviles nativas pero hablaremos más sobre el tema en otro post.

Temas:

1. Qué es react.js.
2. Composición de componentes.
3. Programación funcional.


## Qué es react

React es una librería de javascript desarrollada por facebook, muchos ven a react como el **V** (View - Vista) en el patrón **MVC** (Modelo-Vista-Controlador).

React puede ser visto como un librería pero rapidamente se transforma en una framework gracias a todas las dependencias que suelen utilizarse para crear apps.

¿Pero que hace a react especial?

## Código declarativo

React es una libreria javascript de código declarativo.
Veamos dos ejemplos:

1. Código declarativo.
2. Codigo imperativo.

**Código Imperativo**: Nosotros le decimos a javascript que hacer y como hacerlo.

```javascript
const paises = ["Panamá","Chile","Canadá"];
for(let i = 0; i < paises.length; i++){
    const val = paises[i];
    console.log(val);
}
```

En esta ocasión le decimos javascript que ~~por favor~~ en un loop inicie una variable llamada `i = 0`, que sume `1++`, hasta que `i < paises.length` - en otras palabras: el total de elementos en el array,
despues imprime el valor que se encuentra en el array.


**Código Declarativo**: Nosotros declaramos que queremos y javascript se encarga del resto.

```javascript
const paises = ["Panamá","Chile","Canadá"]
paises.forEach(function ImprimeElemento(pais){
    console.log(pais);
})
```

Nosotros le pedimos a javascript: sabes, quiero que por cada elemento de este array imprimas el valor correspondiente. y puff! magics happens.

## Componentes

Gracias a que react esta basado en componentes podemos dividir UI de nuestra aplicación en pedazos más pequeños y reutilizables. Asi podemos pensar en cada piezas de manera aislada.

### Composición de Componentes

React nos permite combinar componentes para crear componentes mas complejos igual que en javascript que podemos combinar funciones para crear funciones mas complejas.


```javascript
// function 1: se encargar que retornar la suma de dos valores
function Sumar(a, b){
    return a + b;
}

// function 2: se encarga de generar un promedio
function GenerarPromedio(suma, total){
    return suma / total;
}

//function 3: retorna el promedio y el nombre completo
function Cc(a, b, nombre){
    const suma = Sumar(a, b);
    const promedio = GenerarPromedio(suma, 2)
    return {
        promedio,
        nombreCompleto: `${nombre} - Garcia`
    }
}

//Resultado
Cc(4,5, "Hans")
Resp: { promedio: 4.5, nombreCompleto: "Hans Garcia"

```

## React es solo javascript
La ultima caracteristicas que me encanta de react es que es solo javascript, sin dudas estoy importando una libreria y utilizandola pero todo lo demas pertenece a javascript de modo tal que no tengo que aprender un nuevo template que debo agregar a html. 

Dentro de los metodos más utilizado podemos encontrar:

1. map
2. filter
3. reduce

Entre muchos otros más.

Aprender react es aprender javascript.


Si tienes algún comentario hazlo saber, puedes contactarme en [twitter](https://twitter.com/HansLGarcia) o [linkedIn](https://www.linkedin.com/in/hansgarcia/)