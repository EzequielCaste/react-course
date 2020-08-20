import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react'

import { HookApp } from '../HookApp';

describe("Pruebas en <HookApp />", () => {
  test("debe mostrar el componente", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  })
})