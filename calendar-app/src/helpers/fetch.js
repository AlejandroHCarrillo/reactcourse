const baseURL = "http://localhost:4000/api";
// const baseURL = process.env.REACT_APP_API_URL;
if (!process.env.REACT_APP_API_URL){
    console.log("VARIABLE UNDEFINED process.env.REACT_APP_API_URL: ", process.env.REACT_APP_API_URL);
};
console.log("baseURL: ", baseURL);

const fetchWithoutToken = (endpoint, data, method = 'GET') => {
    const url = `${ baseURL }/${endpoint}/`;
    // console.log("url: ", url );
    // console.log("method: ", method );
    // console.log("data: ", data );

    if ( method === 'GET' ){
        return fetch( url );
    }

    return fetch( url, {
        method,
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
}

const fetchWithToken = (endpoint, data, method = 'GET') => {
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
    fetchWithoutToken,
    fetchWithToken
}