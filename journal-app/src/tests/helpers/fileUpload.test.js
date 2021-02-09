import cloudinary from 'cloudinary';

import { fileUpload } from "../../helpers/fileUpload";
import '@testing-library/jest-dom';

cloudinary.config({ 
    cloud_name: 'alexthegreat', 
    api_key: '614759525383557', 
    api_secret: 'yNTPGJMu7GHvcBNg3i0fpFCvn5E' 
  });

const done = jest.fn();

describe('Pruebas al helper fileUpload.js', () => {
    const urlImg = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';

    test('should de cargar una imagen en cloudinary y regresar el url', async() => {
        // const urlImg = 'https://c0.klipartz.com/pngpicture/175/934/gratis-png-logo-de-batman-joker-batgirl-logo-de-batman-logo-de-batman.png';
        const resp = await fetch(urlImg);

        // console.log("Resp: ", resp);
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload( file );

        // console.log("image url: ", url);

        expect(typeof url).toBe('string'); 

        cleanuploadedImage(url);
    });

    test('should de regresar el url null ', async() => {
        const file = new File([], 'foto.png');
        const url = await fileUpload( file );

        // console.log("image url: ", url);

        expect(url).toBe(null); 
        
    });
    
    
    const cleanuploadedImage = (url)=>
    {
        // console.log(url);
        const urlSegments = url.split('/');
        const fileName = urlSegments[urlSegments.length-1];
        
        const filenameSegments = fileName.split('.');
        const fileExtension = filenameSegments[filenameSegments.length-1];
        
        // console.log(urlSegments);
        const imageId = fileName.replace('.' + fileExtension, '');
        // console.log(imageId);
    //  cloudinary.v2.api.delete_resources(public_ids, options, callback);
        cloudinary.v2.api.delete_resources(imageId, {}, ()=>{
            done();
        });
    };

});