---
id: "2"
path: "/hacer-solicitudes-api-con-react"
titleid: "Hacer solicitudes API con React"
date: "2018-02-22T03:16:33.962Z"
title: "Hacer solicitudes API con React"
tags: ['react', 'fetch', "API"]
excerpt: "Trata con data es esencial para todo programador, en este articulo veremos como hacer request con fetch en un ambiente react"
author: "Hans García"
---


##Test
En este articulo vamos a crear un app que nos permita listar todos los paises del mundo, para esto vamos a estar utilizando la API de [restcountries](https://restcountries.eu/), si deseas probar el codigo puedes hacerlo con un editor online como [codesandbox](https://codesandbox.io) o [codepen](https://codepen.io/).

Una vez finalizado este articulo habras aprendido sobre... 

1. Creación de componentes
2. Diferencias entre class components y functional stateless components
3. Manejo de estados (State management)
4. Comunicación de componentes
5. Render UI con data externa

##Creación de componentes
Vamos a estar creando un componente que contendra el titulo de nuestra app y la lista paises.
En react existen diferentes formas de crear componentes, en este caso utilizaremos un **functional stateless component** que llamaremos **ListaDePaises**

```javascript
  //import react y react-dom
  import React, { Component } from "react";
  import { render } from "react-dom";

  //functional stateless component
  const ListaDePaises = (props) => {
      //retorna un elemento jsx 
      return (
          <div>
            <h1>Paises del Mundo</h1>
          </div>
      )
  }

  render(<ListaDePaises />, document.getElementById("root"));
```
Dos cosas a notar.
Podemos pensar un **componente** como un function que acepta argumentos de entrada (input) y nos proporciona un valor de retorno que sera nuestra UI. 
Un **Elemento** en react describe lo que queremos ver en nuestra UI. 

```javascript
  //elemento 
  const titulo = 
    <div>
        <h1>Paises del Mundo</h1>
    </div>
  //functional stateless component
  const ListaDePaises = (props) => {
      return titulo
  }

```

##Diferencias entre class components y functional stateless components
Hemos creado nuestro primer componente, ahora vamos a crear nuestro segundo componente. duh!, pero en esta ocacion crearemos un class component.

Un **class component** se declara de la siguiente manera `class [NombreComponente] extends React.Component`, anteriormente habia mencionado que pensaramos en un componente como una function, esto aplica para un class component tambien, si aplicamos un `typeof className` nos dara como resultado **"function"**.

Un class component tiene un unico metodo obligatorio **render** que debe retornar un react element.
Un class component puede ser inicializado con un state, declarar variables y functiones para uso interno del componente.

Un Functional Stateless Component tiene como fin ser un **Componente de presentacion**, sin manejadores de eventos o inicializadores de data, este acepta parametros de entradas (props) que podemos utilizar para mostrar información. 

```javascript
class Paises extends React.Component {
  render() {
    return (
      <div>
        <ListaDePaises/>
      </div>
    );
  }
}
```

Hemos creado un nuevo componente llamado Pais que sera nuestro contenedor principal de componentes. Una vez hemos creado un componente podemos reutilizarlo la cantidad de veces que deseemos, los componentes pueden referirse entre si e incluso podemos agruparlos para formar componentes mas complejos lo que se conoce como **composicion de componentes**


##Comunicación de componentes
Por ahora todo lo que tenemos es una **Paises del Mundo** en nuestro navegador. Vamos agregarle algo de vida a nuestra app.

Podemos pensar en **props** como argumentos de una función a los cuales podemos acceder con `this.props` o si estamos utilizando un stateless functional component a travez de `props`.

Vamos a pasar el titulo a nuestro componente `<ListaDePaises/>`

```javascript
class Paises extends React.Component {
    render() {
        return (
            <div>
                <ListaDePaises titulo={"Lista de Paises"}/>
            </div>
        );
    }
}

const ListaDePaises = (props) => {
      //si queremos utilizar javascript debe ser dentro de brackets { }
    return (
        <div>
            <h1>{ props.titulo }</h1>
        </div>
    )
}
```


##Unidirectional Data Flow
Antes de continuar quiero explicar como functiona el flujo de data en react.
A diferencia de angular y otros framework, react se basa en un flujo de data unidireccional.


###imagen o gif
Como podemos observar en la imagen la informacion fluye desde el componente padres hacia el componente hijo, toda actualizacion en el state debe ocurrir realizarse en el componente padre mientras que el evento es realizado en el componente hijo.

Teniendo esto claro. Prosigamos...


##Manejo de estados (State management)
Vamos a actualizar nuestro componente y en lugar de pasar directamente desde la invocacion del componente... lo haremos desde el estados del componente padre, en este caso Paises mientras que ListaDePaises es el componente hijo.

```javascript
class Paises extends React.Component {
  state = {
    titulo: "Lista de Paises"
  }
  render() {
    return (
    <div>
      <ListaDePaises titulo={this.state.titulo}/>
    </div>
    );
  }
}
```

State es de donde vive y viene nuestra data, podemos acceder a ella a traves de `this.state`, una vez enviado a ListaDePaises se accede a traves de props.
Pero el titulo no es lo unico que queremos mostrar en nuestra app sino un listado de paises.

```javascript
class Paises extends React.Component {
  state = {
    titulo: "Lista de Paises",
    paises: []
  }
  render() {
    return (
    <div>
      <ListaDePaises titulo={this.state.titulo} paises={this.state.paises}/>
    </div>
    );
  }
}
```
el array paises contendra nuestra lista de paises, esta se la hemos enviado el componente ListaDePaises que sera el encargado de renderizar la informacion.

```javascript
const ListaDePaises = (props) => {
    return (
        <div>
            <h1>{ props.titulo }</h1>
            <ul>
            { props.paises.map( pais => {
                return <li>Nombre: {pais.name} :  Poblacion: {pais.population}</li>
              })
            }
            </ul>
        </div>
    )
}
```


La razón es bastante simple, es lo que hago diariamente, así que a pesar de tener algunos temores ("y si nadie lo lee?") mire algunos diseños de blogs y páginas web, diseñe el actual front end, saque mi editor de texto favorito [vscode](https://code.visualstudio.com/), leí toda la documentación de [gatsbyjs](https://www.gatsbyjs.org/) (claro si no era en react, en qué? ~~php?~~ ) y manos a la obra, después de todo si no hacia mi propio blog sentiría que algo faltaba. Algunos de ustedes seguro entenderán.

Por ahora el blog es mi **MVP** (Minimum Viable Product) - Mínimo Producto Viable, por lo tanto, aún está en desarrollo a la espera de nuevas características dependiendo de la retroalimentación. 

Con muchos planes por delante pero ahora mismo decir **Hola Mundo** desde mi primer post.
```javascript
import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Loading = props => {
  return (
    <React.Fragment>{props.isLoading && <h1>Cargando...</h1>}</React.Fragment>
  );
};

const ListaDePaises = props => {
  return (
    <ul>
      {props.paises.map(pais => {
        return (
          <li>
            <div>
              <p>
                {pais.name}: {pais.population}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

class Paises extends React.Component {
  state = {
    paises: [],
    isLoading: true
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/region/europe")
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          paises: data,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div>
        {
          <div>
            <Loading isLoading={this.state.isLoading} />
            <ListaDePaises paises={this.state.paises} />
          </div>
        }
      </div>
    );
  }
}

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<Paises />, document.getElementById("root"));

```

Si tienes algún comentario hazlo saber, puedes contactarme en [twitter](https://twitter.com/HansLGarcia) o [linkedIn](https://www.linkedin.com/in/hansgarcia/)

