# Enlaces y herramientas utiles para proyectos REACT
Este documento lista algunas de las herramientas utilizadas en el desarrollo de herramientas web desarrolladas con REACT.

## Enzime 

Enzyme es una utilidad de prueba de JavaScript para React que facilita la prueba de la salida de sus componentes de React. También puede manipular, atravesar y, de alguna manera, simular el tiempo de ejecución dado el resultado.

La API de Enzyme está destinada a ser intuitiva y flexible al imitar la API de jQuery para la manipulación y el recorrido de DOM.

https://enzymejs.github.io/enzyme/

### Instalacion:
```
npm i --save-dev enzyme enzyme-adapter-react-16
```

### Configuracion:
En el archivo setupTests.js poner:
```
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```
---

##  enzyme-to-json

Convierte Enzyme wrappers a un formato compatible con Jest snapshot testing.

https://www.npmjs.com/package/enzyme-to-json

### Instalacion:
```
npm install --save-dev enzyme-to-json
```

### Configuracion:
En el archivo setupTests.js poner:
```
import {createSerializer} from 'enzyme-to-json';
 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
```
---

##  react-hooks-testing-library
Utilidades de prueba simples y completas de React hooks que fomentan las buenas prácticas de prueba.

React-hooks-testing-library le permite crear un arnés de prueba simple para React hooks que maneja su ejecución dentro del cuerpo de un componente de función, además de proporciona varias funciones de utilidad útiles para actualizar las entradas y recuperar las salidas de sus increíbles **hook personalizados**.


https://react-hooks-testing-library.com/

### Instalacion:
```
npm install --save-dev @testing-library/react-hooks
```

### Configuracion:
en el archivo de pruebas:
```
import { renderHook } from '@testing-library/react-hooks'
```
---

##  React Router
Para comenzar con React Router en una aplicación web, necesitará una aplicación web React. Es una herramienta popular que funciona muy bien con React Router.

https://reactrouter.com/web/guides/quick-start

### Instalacion:
```
npm install react-router-dom
```

### Configuracion:

```
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

    <Router>
        <div>
            .
            .
            .
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
```
---

## Query String
Esta libreria facilita el manejo de los parametros obtenidos por query string 

https://www.npmjs.com/package/query-string

### Instalacion:
```
npm install query-string
```

### Uso:

```
    const queryString = require('query-string');

    console.log(location.search);
    //=> '?foo=bar'

    const parsed = queryString.parse(location.search);
    console.log(parsed);
    //=> {foo: 'bar'}

    console.log(location.hash);
    //=> '#token=bada55cafe'

    const parsedHash = queryString.parse(location.hash);
    console.log(parsedHash);
    //=> {token: 'bada55cafe'}

    parsed.foo = 'unicorn';
    parsed.ilike = 'pizza';

    const stringified = queryString.stringify(parsed);
    //=> 'foo=unicorn&ilike=pizza'

    location.search = stringified;
    // note that `location.search` automatically prepends a question mark
    console.log(location.search);
    //=> '?foo=unicorn&ilike=pizza'
```
---

## Redux Devtools Extension

https://github.com/zalmoxisus/redux-devtools-extension

### Instalacion:
```
1. For Chrome
* from Chrome Web Store;
* or download extension.zip from last releases, unzip, open chrome://extensions url and turn on developer mode from top left and then click; on Load Unpacked and select the extracted folder for use
* or build it with npm i && npm run build:extension and load the extension's folder ./build/extension;
* or run it in dev mode with npm i && npm start and load the extension's folder ./dev.
```

### Configuracion:

```
 const store = createStore( 
     reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
```

## Query String
Esta libreria facilita el manejo de los parametros obtenidos por query string 

https://www.npmjs.com/package/query-string

### Instalacion:
```
npm install query-string
```

### Uso:

```
    const queryString = require('query-string');

    console.log(location.search);
    //=> '?foo=bar'

    const parsed = queryString.parse(location.search);
    console.log(parsed);
    //=> {foo: 'bar'}

    console.log(location.hash);
    //=> '#token=bada55cafe'

    const parsedHash = queryString.parse(location.hash);
    console.log(parsedHash);
    //=> {token: 'bada55cafe'}

    parsed.foo = 'unicorn';
    parsed.ilike = 'pizza';

    const stringified = queryString.stringify(parsed);
    //=> 'foo=unicorn&ilike=pizza'

    location.search = stringified;
    // note that `location.search` automatically prepends a question mark
    console.log(location.search);
    //=> '?foo=unicorn&ilike=pizza'
```
---

## Bootstrap 
Bootstrap es el framework de trabajo más popular del mundo para crear sitios con capacidad de respuesta para dispositivos móviles.

https://getbootstrap.com/docs/5.0/getting-started/introduction/

## Download
https://getbootstrap.com/docs/5.0/getting-started/download/

### Instalacion:
css:
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
```
JS:
```
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
```
---

## Api Breaking bad
Api de prueba que nos devuelve citas de la serie Breaking bad

https://breakingbadapi.com/documentation

### Ejemplos de uso:

```
https://breakingbadapi.com/api/
https://breakingbadapi.com/api/quotes
https://breakingbadapi.com/api/quotes/1

```
---

## Animaciones Animate.css
https://animate.style/

### Instalacion:
```
npm install animate.css --save
```
o
```
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
```

### Ejemplo de uso:

```
<h1 class="animate__animated animate__bounce">An animated element</h1>
```
---

## Curso de Firestore en youtube

https://www.youtube.com/playlist?list=PLCKuOXG0bPi29EkcAuVCln9ISbExcQk66

---

## Manejo de acciones asincronas con Redux Thunk

El middleware Redux Thunk le permite escribir creadores de acciones que devuelvan una función en lugar de una acción. El procesador se puede utilizar para retrasar el envío de una acción, o para enviar solo si se cumple una determinada condición. La función interna recibe los métodos del store dispatch y getState como parámetros.


### Instalacion:
```
npm install --save redux-thunk
```

### Configuracion
En el archivo **store:** 
```
import thunk from 'redux-thunk'
```
### Ejemplo de uso:
```
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

import thunk from 'redux-thunk';
 
// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```
---


## Firebase

https://console.firebase.google.com/

### Instalacion:
```
npm install firebase
```

### Configuracion:

```

```
---


## validator
This library validates and sanitizes strings only.

https://www.npmjs.com/package/validator

### Instalacion:
```
npm i validator
```

### Configuracion:

```
import validator from 'validator';
```
---


## Sweetalert 2
UN REEMPLAZO HERMOSO, RESPONSABLE, PERSONALIZABLE Y ACCESIBLE (WAI-ARIA) PARA LAS CAJAS POPUP DE JAVASCRIPT

https://sweetalert2.github.io/

### Instalacion:
```
npm install sweetalert2
```
o
```
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
```

### Configuracion:
https://sweetalert2.github.io/#configuration


### Ejemplo de uso:

https://sweetalert2.github.io/#usage

```
import Swal from 'sweetalert2/dist/sweetalert2.js'


```

---

## Momment
Analizar, validar, manipular, y mostrar fechas y horas en JavaScript

https://momentjs.com/

### Instalacion:
```
npm install moment --save
```

### Configuracion:

```

```
### Format Dates
```
moment().format('MMMM Do YYYY, h:mm:ss a'); // January 24th 2021, 3:02:04 am
moment().format('dddd');                    // Sunday
moment().format("MMM Do YY");               // Jan 24th 21
moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
moment().format();    ```

```
---


