const { fileUpload } = require("../../helpers/fileUpload");



describe('Pruebas en fileUpload', () => {


  test('debe cargar un archivo y retornar el URL', async() => {

    jest.setTimeout(30000);
 
    const resp = await fetch('https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg');
    const blob = await resp.blob();

    const file = new File([blob], 'foto.png');
    const url = await fileUpload( file );

    expect( typeof url ).toBe('string');
  });

  test('debe retornar un error', async() => {
    const file = new File([], 'foto.png');
    const url = await fileUpload( file );

    expect( url ).toBe( null );
  })
  
})