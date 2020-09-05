const { fileUpload } = require("../../helpers/fileUpload");
import cloudinary from "cloudinary";

cloudinary.config({ 
  cloud_name: 'dc5tgkybd', 
  api_key: '691214649851788', 
  api_secret: '3KzPBay3WSCFyWWfGPqxLxfwcbU' 
});

describe('Pruebas en fileUpload', () => {


  test('debe cargar un archivo y retornar el URL', async( done ) => {

    jest.setTimeout(30000);
 
    const resp = await fetch('https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg');
    const blob = await resp.blob();

    const file = new File([blob], 'foto.png');
    const url = await fileUpload( file );

    expect( typeof url ).toBe('string');

    //Borrar imagen por ID
    const segments = url.split('/');
    const imageId = segments[ segments.length - 1 ].replace('.jpg', '');

    
    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      done();
    });


  });

  test('debe retornar un error', async() => {
    const file = new File([], 'foto.png');
    const url = await fileUpload( file );

    expect( url ).toBe( null );
  })
  
})