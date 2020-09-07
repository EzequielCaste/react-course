import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';

jest.mock('../../../actions/notes', () => ({
  activeNote: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: '1',
    name: 'Eze'
  },
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    notes: [],
    active: {
      id: 1234,
      title: 'hola',
      body: 'mundo',
      date: 0
    }
  }
};

let store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount( 
  <Provider store={ store }>      
          <NoteScreen />       
  </Provider>
)


describe('Pruebas en <NoteScreen />', () => {
  
  test('debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  })
  
  test('debe disparar el active note', () => {
    
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'Hola de nuevo'
       }
    })

    expect( activeNote ).toHaveBeenLastCalledWith(
      1234, 
      {
        "body": "mundo", 
        "date": 0, 
        "id": 1234, 
        "title": "Hola de nuevo"
      })
 

  })
  
})
