import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore( initState );
store.dispatch = jest.fn();

const nota = {
  id: 20,
  date: 0,
  title: 'Hola',
  body: 'Mundo',
  url: 'https://somewhere.com/foto.png'
}

const wrapper = mount( 
  <Provider store={ store }>      
          <JournalEntry { ...nota } />       
  </Provider>
)



describe('Pruebas en <JournalEntry />', () => {
  
  test('debe mostrarse correctamente', () => {
    expect( wrapper ).toMatchSnapshot();    
  })

  test('debe activar la nota', () => {
    wrapper.find('.journal__entry').prop('onClick')();
    expect( store.dispatch ).toHaveBeenCalledWith(
      activeNote( nota.id, { ...nota } )
    );
  })
  
  
})
