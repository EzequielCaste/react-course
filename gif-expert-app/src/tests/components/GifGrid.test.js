import React from 'react'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import '@testing-library/jest-dom'

jest.mock('../../hooks/useFetchGifs')

describe("Prueba en <GifGrid />", () => {

  const category = 'Bobs Burgers'

  test("debe mostrar correctamente el componente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow(<GifGrid category={ category } />);
    expect( wrapper ).toMatchSnapshot()
  })

  test("debe mostrar items cuando se cargan imágenes useFetchGifs", () => {

    const gifs = [{
      id: "ABC",
      url: "http://localhost/loquesea.pgn",
      title: "algo"
    },
    {
      id: "123",
      url: "http://localhost/loquesea.pgn",
      title: "algo123"
    }]

    useFetchGifs.mockReturnValue( {
      data: gifs,
      loading: false
    } )

    const wrapper = shallow(<GifGrid category={ category } />);
    //expect( wrapper ).toMatchSnapshot()
    expect( wrapper.find('p').exists() ).toBe(false)
    expect( wrapper.find('GifGridItem').length).toBe( gifs.length) 

  })
})
