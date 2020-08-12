import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import React from 'react'

import { GifExpertApp } from '../GifExpertApp'

describe("Pruebas en GifExpertApp", () => {

  const wrapper = shallow(<GifExpertApp />)

  test("debe mostrar correctamente el componente", () => {
    expect( wrapper ).toMatchSnapshot();
  })

  test("debe mostrar una lista de categorias", () => {
    const categories = ['Seinfeld', "Bobs Burgers"]

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length)
  })
})