let baseURL = "http://localhost:4000/api";
if (process.env.NODE_ENV === "development") {
    baseURL = "http://localhost:4000/api";
} else {
    baseURL = "https://calendar-backend-node.herokuapp.com/api";
}

// console.log("development: ", process.env.development);
if (process.env.NODE_ENV === "development" && !process.env.REACT_APP_API_URL){
    // console.log("LA VARIABLE UNDEFINED process.env.REACT_APP_API_URL: ", process.env.REACT_APP_API_URL);
    console.log("LA VARIABLE API_URL ESTA: ", process.env.REACT_APP_API_URL);
    console.log("HAY QUE REVISAR LAS VARIABLES DE PROCESOS DE ENTORNO");
    console.log("baseURL ESTA HARD CODEADA"); 
    // console.log("baseURL: ", baseURL); 
} 
if (process.env.REACT_APP_API_URL){
    baseURL = process.env.REACT_APP_API_URL;
    console.log("URRA YA ESTA LEYENDO LAS VARIABLES DE ENTORNO");
};

const fetchSimple = (endpoint, data, method = 'GET') => {
    const url = `${ baseURL }/${endpoint}/`;
    // console.log("url: ", url, "method: ", method, "data: ", data );

    if ( method === 'GET' ){
        return fetch( url );
    }

    return fetch( url, {
        method,
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
}

const fetchToken = (endpoint, data, method = 'GET') => {
    const url = `${ baseURL }/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' ){
        return fetch( url, {
            method,
            headers: { 'x-token': token }
        });    
    }

    return fetch( url, {
        method,
        headers: {
            'Content-type': 'application/json',
            'x-token': token 
        },
        body: JSON.stringify( data )
    });
}

export {
    fetchSimple,
    fetchToken
}