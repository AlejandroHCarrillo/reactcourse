import {getUser, getUsuarioActivo} from "../base/05-funciones"

describe('Probando archivo de funciones 05-funciones', ()=>{
    test('getUser should return', () => {

        const userTest = {
            uid : "ABC123",
            username : 'elmerohomero123'
        }

        const user = getUser();

        expect(user).toStrictEqual(userTest);
        
    })

    // Probar getUsuarioActivo
    test('getUsuarioActivo debe de regresar un objeto con el nombre que mandamos de parametro ', () => {
        const nombreUsuario = "bruce wayne";
        const userTest = {
            uid : "ABC567",
            username : nombreUsuario
        }

        const user = getUsuarioActivo(nombreUsuario);

        expect(user).toEqual(userTest);
        
    })
    
    

})