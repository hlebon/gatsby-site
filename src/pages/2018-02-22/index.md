---
id: "1"
path: "/react-elementos-componentes-jsx"
titleid: "react-elementos"
date: "2018-02-22T01:12:33.962Z"
title: "React: Elementos, Componentes y JSX"
tags: ['react', 'componentes', 'elementos', 'jsx']
excerpt: "En este post estaremos aprendiendo de manera rapida algunos conceptos básicos de react"
author: "Hans García"
---

En este articulo introductorio vamos a estar aprendiendo conceptos basicos de react, si deseas probar el codigo puedes hacerlo con un editor online como [codesandbox](https://codesandbox.io) o [codepen](https://codepen.io/).

Una vez finalizado este articulo habras aprendido sobre...
1. Que es un elemento
2. Creación de componentes
3. Diferencias entre class components y functional stateless components
4. Que es JSX

## Qué es un elemento en react?
Un elemento describe lo que queremos ver en la pantalla.

Podemos crear un elemento con el metodo createElement de la libreria React.
```javascript
  //elemento 
  const titulo = React.createElement("h1", null, "Mi titulo")
  
  //HTML
  <h1>Mi titulo</h1>
```
createElement acepta 3 parametros `createElement(type, [props], [...children])`
1. **type**: por lo general un tag html, por ejemplo: **h1, span**
2. **props**: una lista de propiedades, `{ class: "className" }`, podemos agregar una clase a nuestro **h1**
3. **...children**: El contenido o hijos del elemento que estamos creando, este puede ser otro elemento react


```javascript 
  const titulo = React.createElement("h1", null, "Mi titulo")
  const contenedor = React.createElement("div", null, titulo)
  //HTML
  <div>
     <h1>Mi titulo</h1>
  </div>
```

Pongamos la teoria en práctica
Crear un elemento en react que muestre el siguiente html

```html 
  <header class="container">
     <h1>Mi titulo</h1>
     <h2>Mi subtitulo</h2>
  </header>
```

## Creación de Componentes
Podemos pensar en un **componente** como un función que acepta parametros de entrada (inputs: props) y nos proporciona un valor de retorno. Todo componente debe tener un valor de retorno este valor es un **Elemento** en react que, como ya hemos mencionado, describe lo que queremos ver en nuestra pantalla.

Veamos un ejemplo:
```javascript 
  const MiComponente = (props) => {
    return React.createElement("h1", null, "Hola Mundo")
  }
```

Podemos declarar un componente de dos maneras diferentes
- Como una funcion (functional component)
- Como una class javascript

```javascript 
  // Ejemplo de un class component
  class MiComponente extends React.Component{
    //render es el unico metodo obligatorio en un class component
    render(){
      return React.createElement("h1", null, "Hola Mundo")
    }
  }
```

Un componente nos permite retulizar nuestro codigo, dividir nuestra UI en pedazos más pequeños, simplifica el desarrollo al tratar un componente de manera independiente.

## Renderizar elementos y componentes
Para renderizar un componente en pantalla utilizaremos la api de react-dom

```javascript 
  // Importar react dom
  import { render } from 'react-dom'

  const MiComponente = (props) => {
    return React.createElement("h1", null, "Hola Mundo")
  }
  
  render(<MiComponente/>, document.getElementById('root'));
```
El metodo render acepta dos parametros
1. El componente o elemento a renderizar: 
2. El nodo DOM donde quiero renderizarlo

Un punto a destacar es que todos nuestros componentes debe inicializar con letra mayuscula, de esta manera react puede diferenciar entre un elemento tag html y un componente, si queremos utilizar un componente lo hacemos con la sintaxis: `<MiComponente />`, si queremos utilizar un elemento simplemente escribimos el nombre del elemento.

```javascript 
  //renderizar un componente
  render(<MiComponente/>, document.getElementById('root'));
  //renderizar un elemento
  render(elemento, document.getElementById('root'));
```


## JSX
Parece ser que utilizar react es mas complicado de lo esperado, despues de todos quien puede estar anidando **createElement** uno tras otros.
Aqui es donde damos gracias por **JSX**

```javascript 
  const titulo = <h1>Mi titulo</h1>
```
JSX no es html, ni tampoco un string en javascript, JXS es una extensión de javascript que nos permite escribir nuestros elementos al estilo html, este codigo JSX es compilado a un objecto javascript. En otro articulo hablaremos sobre este babel y el virtual DOM.

Por ahora JSX facilita el proceso para creación transformando nuestro codigo de JSX a Javascript

```javascript 
  //jsx
  const titulo = <h1>Mi titulo</h1>
  //transformado a
  const titulo = React.createElement("div", null, "Mi titulo")
```

## Resúmen
1. En este post hemos aprendido
2. Que es un elemento en react
3. Como crear componentes
4. Las dos formas de crear un componente: functional & class component
5. renderizar componentes
7. utilizar jsx


Si tienes algún comentario hazlo saber, puedes contactarme en [twitter](https://twitter.com/HansLGarcia) o [linkedIn](https://www.linkedin.com/in/hansgarcia/)

