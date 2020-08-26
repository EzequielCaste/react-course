import React from 'react'

import { shallow } from 'enzyme'
import { HeroCard } from '../../../components/heroes/HeroCard'
import '@testing-library/jest-dom'

describe('Pruebas en <HeroCard />', () => {

  const wrapper = shallow(<HeroCard />);

  test('debe mostrarse correctamente', () => {

    expect( wrapper ).toMatchSnapshot();

  })
})