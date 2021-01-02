import { getGifs } from "../../../helpers/getGifs";

describe('Probando helper getGifs', () => {

    test('getGifs should regresar una lista de 10 imagenes', async () => {
        const imgList = await getGifs('spiderman');

        expect( imgList.length ).toBe(10);
    })

    test('getGifs should regresar una lista vacia cuando se manda la categoria vacia', async () => {
        const imgList = await getGifs('');

        expect( imgList.length ).toBe(0);
    })

    
})
