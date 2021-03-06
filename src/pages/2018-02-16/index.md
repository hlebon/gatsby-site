---
id: "2"
path: "/introduccion-a-react"
titleid: "Introduccion a react"
date: "2018-02-16T01:12:33.962Z"
title: "Introducción a React: Que es React.js"
tags: ['react','intro','jsx', "javascript"]
excerpt: "React es una librería javascript muy poderosa, creada por facebooks que nos permite crear aplicaciones web..."
author: "Hans García"
---

React es una librería javascript muy poderosa que nos permite crear aplicaciones web. También esta [react-native](https://facebook.github.io/react-native/) que está enfocada en crear aplicaciones móviles nativas pero hablaremos más sobre el tema en otro post.

Temas:

1. Qué es react.js.
2. Código declarativo e imperativo.
3. Composición de componentes.


## Qué es react.js?

React es una librería de javascript desarrollada por facebook, muchos ven a react como el **V** (View - Vista) en el patrón **MVC** (Modelo-Vista-Controlador).

React puede ser visto como una librería pero rápidamente se puede transformar en una framework gracias a todos los componentes que pueden utilizarse para crear una aplicación.

¿Pero que hace a react especial?

## Código declarativo

React es una librería javascript de código declarativo.
Veamos dos ejemplos:

1. Código declarativo.
2. Código imperativo.

**Código Imperativo**: Nosotros le decimos a javascript que hacer y cómo hacerlo.

```javascript
const paises = ["Panamá","Chile","Canadá"];
for(let i = 0; i < paises.length - 1; i++){
    const val = paises[i];
    console.log(val);
}
```

En esta ocasión le decimos javascript que ~~por favor~~ en un loop inicie una variable llamada `i = 0`, que sume `1++`, hasta que `i < paises.length` - en otras palabras: el total de elementos en el array,
después imprime el valor que se encuentra en el array.

**Código Declarativo**: Nosotros declaramos que queremos y javascript se encarga del resto.

```javascript
const paises = ["Panamá","Chile","Canadá"]
paises.forEach(function ImprimeElemento(pais){
    console.log(pais);
})
```

Nosotros le pedimos a javascript: sabes, quiero que por cada elemento de este array imprimas el valor correspondiente. y puff! magic happens.

## Componentes

Gracias a que react está basado en componentes podemos dividir la UI de nuestra aplicación en pedazos más pequeños y reutilizables. Así podemos pensar en cada pieza de manera aislada.

### Composición de Componentes

React nos permite combinar componentes para crear componentes más complejos igual que en javascript que podemos combinar funciones para crear funciones más complejas.


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

La ultima características que me encanta de react es que es solo javascript de modo tal que no tengo que aprender un nuevo template para usar en el html.

Dentro de los metodos más utilizado podemos encontrar:

1. **map**
2. **filter**
3. **reduce**

Entre muchos otros más.

Aprender react es aprender javascript.

Si tienes algún comentario hazlo saber, puedes contactarme en [twitter](https://twitter.com/HansLGarcia) o [linkedIn](https://www.linkedin.com/in/hansgarcia/)