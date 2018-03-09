---
id: "2"
path: "/elementos-componentes-y-jsx"
titleid: "Intro a react"
date: "2018-02-22T03:16:33.962Z"
title: "React: Elementos, Componentes y JSX"
tags: ['react', 'elementos', "componentes", "jsx]
excerpt: "Trata con data es esencial para todo programador, en este articulo veremos como hacer request con fetch en un ambiente react"
author: "Hans García"
---


En este articulo introductorio vamos a estar aprendiendo conceptos basicos de react, si deseas probar el codigo puedes hacerlo con un editor online como [codesandbox](https://codesandbox.io) o [codepen](https://codepen.io/).

Una vez finalizado este articulo habras aprendido sobre... 

1. Que es un elemento
2. Creación de componentes
2. Diferencias entre class components y functional stateless components
3. Que es JSX

##Qué es un elemento en react
Un elemento describe lo que queremos ver la pantalla.
```javascript
  //elemento 
  const titulo = React.createElement("h1", null, "Hola Mundo")
```

En este ejemplo, hemos utilizado la api de react para crear un elemento, el cual agregado al dom nos mostrara un `<h1>Hola Mundo</h1>`.

##Creación de Componentes
Podemos pensar en un **componente** como un función que acepta argumentos de entrada (inputs: props) y nos proporciona un valor de retorno. Todo componente debe tener un valor de retorno este valor es un **Elemento** en react que, como ya hemos mencionado, describe lo que queremos ver en nuestra pantalla.

En esta ocasión hemos utilizando **JSX** que es una extension de javascript que nos permite escribir expresar nuestra UI en forma de HTML, pero debemos estar claros que JSX no es HTML ni tampoco un tipo de valor string. 

Podemos declarar un componente como una **función** o una **clase**, estos se les conocen como un **functional stateless component** y un **class component** respectivamente.


```javascript
  //functional stateless component
  const MiComponente = (props) => {
      //retorna un elemento jsx 
      return React.createElement("h1", null, "Hola Mundo")
  }

 //class component
  class MiClassComponente extends React.Component{
    render(){
      return <h1>Hola Mundo</h1>
    }
  }

```
##JSX simplifica todo
Como habrás podido notar, utilizar la api de react puede ser tedioso, para solucionar esto tenemos JSX.
JSX es una extensión de javascript que nos permite crear componentes, elementos en estilo de html.

```javascript
 const jsx = <h1>Hola mundo!</h1>
```
Debemos tener claro que JSX no es ni html ni tampoco un tipo de dato string.

##Creando nuestro primer componente
vamos a crear un componente.

```javascript
//class component
class ListaDeRepositorios extends React.Component {
  //único metodo obligatorio
  render() {
    //retorna un elemento que es nuestra UI
    return (
      <div>
        <h1>Repositorios</h1>
        <ul>
          <Repositorio/>
        </ul>
      </div>
    );
  }
}

//stateless functional component
const Repositorio = (props) => {
  //regresa un elemento
  return (
    <li>{props.nombre}<li>
  )
}

```

Ya habia comentado que un componente es como una función, entonces como hacemos para pasarle datos, hacemos al momento de componer un componente.
Más adelante en otro post estare más a fondo por el momento debemos saber que para pasar un valores a un componente simplement lo declaramos cuando lo llamamos.

```javascript

const Componente1 = (props) => {
  return (
    <h1>Hola {props.nombre}</h1>
  )
}
const Componente2 = (props) => {
  return (
    <div>
      <Componente1 nombre="Hans"/>
    </div>
  )
}

```
De esta manera comenzaremos a crear componentes dinamicos. Para acceder a esta variable lo hacemos a traves de **props**, si estamos utilizando un **stateless funcional component** accedemos a través del argumento declarado ``const Componente2 = (props) => ...`` , si utilizamos un **class component**
accedemos a traves de ``this.props.{nombre}``.

Para podemos utilizar javascript en JSX debemos hacerlo con brackes: ``<h1>Hola {props.nombre}</h1>``


##Conclusión
En este articulo se ha explicado de manera general conceptos básicos de react. En un post ~~futuro~~ cercano haremos nuestros componentes dinámicos.

Si tienes algún comentario hazlo saber, puedes contactarme en [twitter](https://twitter.com/HansLGarcia) o [linkedIn](https://www.linkedin.com/in/hansgarcia/)

