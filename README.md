# Enlaces y herramientas utiles para proyectos REACT
Este documento lista algunas de las herramientas utilizadas en el desarrollo de herramientas web desarrolladas con REACT.

Para crear un proyecto de React 

```
npx create-react-app [nombre-app]
```

Eliminar todos los archivos del directorio src solo dejar el index

en el archivo index.js cambiar el componente App por la app que estemos desarrollando por ejemplo CalendarApp:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { CalendarApp } from './CalendarApp';

ReactDOM.render(
    <CalendarApp />,
  document.getElementById('root')
);
```
### crear un componente
Los componentes se deben guardar en un directorio llamado components dentro de src. Se deben agrupar en subdirectorios dependiendo su uso o categoria. 

Usar el snipped rafc
```
import React from 'react'

export const LoginScreen = () => {
    return (
        <div>
            
        </div>
    )
}
```

### Directorios utiles
A continuacion una lista de los direcctorios que pueden ser requeridos en el desarrollo de la app. 

src/components: contiene los componentes necesarios en la app 
src/helpers : contiene los archivos JS con funciones que pueden ser reutilizadas
src/actions : contiene los archivos de acciones para cada store
src/hooks   : contiene los hooks para el manejo de diferentes cosas
src/store   : contiene el store el cual concentra los reducers que se usan en la app
src/styles  : contiene los archivos de estilo
src/routers : contiene los routers utilizados en la app
src/types   : contiene un archivo con los enumeradores
src/tests   : dentro de este folder replicaremos la misma estructura de src con los tests de los archivos.


### Receta de cocina:

1. Crear el proyecto
2. Crear los componentes Basicos
3. Crear el o los Routers ej. AppRouter
4. Crear crear los enumeradores en el archivo types
5. Crear las acciones
6. Crear el o los reducers especificos (ej. uiReducer )
7. Crear el rootReducer (Usar plantilla)
8. Crear el store (Usar Plantilla)

### Archivos de acciones
Los archivos de acciones construyen los objetos que que seran procesados por el reducer. La estrucctura basica de una accion contiene el ***type***, que es el nombre de la accion a realizar y el ***payload*** ver el ejemplo siguiente:

```
export const reducerAction = () => ({ 
  type: types.add 
  payload: {
    // Objeto con toda la informacion relacionada a la accion a realizar
  }
  });
```

### Hooks

https://es.reactjs.org/docs/hooks-rules.html


### Ejemplo archivo de reducer
```
import { types } from "../types/types";

const initialState = {
    modalOpen: false
}

export const uiReducer = ( ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiOpenModal:            
            return {
                ...state,
                modalOpen: true
            };
        case types.uiCloseModal:            
            return {
                ...state,
                modalOpen: false
            };
        default:
            return state;
    }

});
```

### El rootReducer
El archivo rootReducer concentra todos los reducers en un solo archivo
```
import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer
    // authReducer:
});
```

### El useState
El use state sirve para manipular las variables (ahora constantes)
```
  import React, { useState } from 'react'

  const [valor, setValor] = useState( estadoInicial );
```

El "valor" es el contenido de la constante puede ser usado para mostrar la informacion que contiene, pero no puede ser modificado directamente.

setValor es una funcion encargada de reescribir la constate con el nuevo valor enviado en los parametros.

El estado inicial es el valor por default que va a tener la constate al inicio de la ejecucion.

### use Effect
El use efect es como un observador que se ejecuta cuando cambia el estado de lo(s) elementos en el arraglo del segundo parametro 
```
import React, { useEffect } from 'react'

    useEffect(() => {
        if ( activeEvent ){
            setFormValues(activeEvent);
        }
    }, [activeEvent]);
```

### UseSelector
El useSelector permite leer el contenido del store, ya sea completo o una sola seccion

Uso:
```
  import { useSelector } from 'react-redux';


  const { modalOpen } = useSelector( state => state.ui );
```

### useDispatch
Permite ejecutar una accion contenida en el reducer 

Uso:
´´´
import { useSelector } from 'react-redux';

    const dispatch = useDispatch();

    dispatch( reducerAction() );
´´´



## Herramientas de dasarrollo Redux DevTools Extension

https://extension.remotedev.io/

### Instalacion:
``` 

``` 
### Configuracion: 
``` 
https://extension.remotedev.io/#usage
``` 
### Uso 
``` 
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers (
        applyMiddleware( thunk )
    )
);
``` 
---

## Pruebas o Testing Enzime 

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

## Pruebas o Testing enzyme-to-json

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

## Pruebas o Testing react-hooks-testing-library
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
En el archivo 

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

### Configuracion styles:
```
react-big-calendar/lib/css/react-big-calendar.css
```
### Format Dates
https://momentjs.com/docs/#/displaying/format/

```
moment().format();                                // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
moment().format("ddd, hA");                       // "Sun, 3PM"
moment().format("[Today is] dddd");               // "Today is Sunday"
moment('gibberish').format('YYYY MM DD');         // "Invalid date"

moment().format('MMMM Do YYYY, h:mm:ss a'); // January 24th 2021, 3:02:04 am
moment().format('dddd');                    // Sunday
moment().format("MMM Do YY");               // Jan 24th 21
moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
moment().format();    ```

```
---

## Almacenamiento de imagenes y video en la nube cloudinary
Automatiza todo el ciclo de vida de gestión de imágenes Almacena, transforma, optimiza y entrega todos los activos multimedia con API, widgets o interfaz de usuario fácil de usar.

https://cloudinary.com/

SDK
https://cloudinary.com/documentation
https://cloudinary.com/documentation/node_integration

https://cloudinary.com/documentation/image_upload_api_reference

https://cloudinary.com/documentation/admin_api


### Instalacion:
```
npm install cloudinary --save-dev
```

### Configuracion:
```
cloudinary.config({ 
  cloud_name: 'sample', 
  api_key: '874837483274837', 
  api_secret: 'a676b67565c6767a6767d6767f676fe1' 
});
```
### Uso
```

Delete images
cloudinary.v2.api.delete_resources(public_ids, options, callback);
```
---

## redux-mock-store
redux-mock-store es un almacenamiento simulado para probar los creadores de acciones asíncronas y el middleware de Redux. El almacenamiento simulado creará una serie de acciones distribuidas que sirven como un registro de acciones para las pruebas.

### Instalacion:
```
npm install redux-mock-store --save-dev

```

### Configuracion:
```

```
### Uso
```

```
---

##  Font awesome
Font awesome es una libreria de iconos 

https://cdnjs.com/libraries/font-awesome

### Instalacion:
En el archivo index.html
``` 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
``` 
### Configuracion: 
``` 

``` 
### Uso 
``` 
<span className="fas fa-sign-out-alt" > Salir</span>
``` 
---

## Calendario react-big-calendar
react-big-calendar es un componente de calendario de eventos creado para React y diseñado para navegadores modernos (lea: IE10 +) y utiliza flexbox sobre el enfoque clásico de ception tablas.

https://www.npmjs.com/package/react-big-calendar

### Instalacion: 
``` 
npm i react-big-calendar
``` 
### Configuracion: 
https://github.com/jquense/react-big-calendar#readme
``` 

```
### DEMO
```
http://jquense.github.io/react-big-calendar/examples/index.html
``` 

### Uso 
``` 
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment)  // or globalizeLocalizer


const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)
``` 
---

##  Ventanas modales reac-modal
Componente para crear ventanas de diálogo modales accesibles para React.JS

https://www.npmjs.com/package/react-modal
### Instalacion: 
``` 
npm i react-modal
``` 
### Ejemplo de uso:

https://codepen.io/claydiffrient/pen/KNxgav 

### Uso 
``` 
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#yourAppElement')
 
function App(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
}
 
ReactDOM.render(<App />, appElement);
``` 
---

## Control de seleccion de fecha hora react-datetime-picker

react-datetime-picker es un control de seleccion de fechas y hora para react
### Instalacion: 
``` 
npm i react-datetime-picker
``` 
### Configuracion: 
``` 

``` 
### Uso 
``` 
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DateTimePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
``` 
---
##  react-redux
React Redux es el enlace oficial de React para Redux. Permite a sus componentes React leer datos de una tienda Redux y enviar acciones a la tienda para actualizar los datos.

https://react-redux.js.org/introduction/quick-start

### Instalacion: 
``` 
npm install react-redux
``` 
Instalar todo de una vez
```
npm install react-redux redux redux-thunk
```

### Configuracion: 
``` 

``` 
### Uso 
``` 

``` 
---