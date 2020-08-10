import React from 'react';
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem';

describe("Prueba de renderización <GifGridItem />", () => {
  const url = "https://localhost/algo.png"
  const title ="Hola Mundo"

  let wrapper = shallow(<GifGridItem url={url} title={title} />);

  test("debe mostrar <GifGridItem />", () => {
    expect(wrapper).toMatchSnapshot();
  })
})