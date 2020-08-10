import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe("Pruebas en <GifGridItem />", () => {

  const url = "https://localhost/algo.png"
  const title ="Hola Mundo"
  const wrapper = shallow(<GifGridItem url={url} title={title} />);

  test("debe mostrar <GifGridItem />", () => {
    expect(wrapper).toMatchSnapshot();
  })

  test("debe de tener un párrafo con el title", () => {

    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe( title )
  })

  test("debe tener la imagen y alt de las props", () => {
    const img = wrapper.find('img');

    expect( img.prop('src') ).toBe( url );
    expect( img.prop('alt') ).toBe( title );
  })

  test('debe tener animate__fadeIn', () => {
    const div = wrapper.find('div');

    expect( div.hasClass('animate__fadeIn') ).toBe(true)
  })
  
})