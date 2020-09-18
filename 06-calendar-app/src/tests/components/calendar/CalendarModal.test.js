import React from 'react';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import moment from 'moment';
import '@testing-library/jest-dom';
import { CalendarModal } from '../../../components/calendar/CalendarModal';
import { eventStartUpdate, eventClearActiveEvent, eventStartAddNew } from '../../../actions/events';
import { act } from 'react-dom/test-utils';
import Swal from 'sweetalert2';

jest.mock('sweetalert2', () => ({
  fire: jest.fn()
})
);

jest.mock('../../../actions/events', () => ({
  eventStartUpdate: jest.fn(),
  eventClearActiveEvent: jest.fn(),
  eventStartAddNew: jest.fn()
})
);
 
const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const now = moment().minutes(0).seconds(0).add(1, 'hours'); 
const nowPlus1 = now.clone().add(2, 'hours');

const initState = {
  calendar: {
    events: [],
    activeEvent: {
      title: 'Hola Mundo',
      notes: 'notas',
      start: now.toDate(),
      end: nowPlus1.toDate()
    }
  },
  auth: {
    uid: '123',
    name: 'Eze'
  },
  ui: {
    modalOpen: true
  }

};
const store = mockStore(initState);
store.dispatch = jest.fn();


const wrapper = mount(
  <Provider store={ store } >
    <CalendarModal />
  </Provider>
)


describe('Pruebas en <CalendarModal />', () => {

  beforeEach( () => {
    jest.clearAllMocks();
  })

  test('debe mostrar el modal', () => {   

    expect( wrapper.find('Modal').prop('isOpen') ).toBe(true);

  })

  test('debe llamar la acciones de actualizar y cerrar el modal', () => {

    wrapper.find('form').simulate('submit', {
      preventDefault(){}
    });

    expect( eventStartUpdate ).toHaveBeenCalledWith( initState.calendar.activeEvent );
    expect( eventClearActiveEvent ).toHaveBeenCalledWith(  );
       
  })

  test('debe mostrar error si falta el título', () => {
    
    wrapper.find('form').simulate('submit', {
      preventDefault(){}
    });

    expect( wrapper.find('input[name="title"]').hasClass('is-invalid') ).toBe( true );

  })

  test('debe crear un nuevo evento', () => {

    const initState = {
      calendar: {
        events: [],
        activeEvent: null
      },
      auth: {
        uid: '123',
        name: 'Eze'
      },
      ui: {
        modalOpen: true
      }
    
    };

    const store = mockStore(initState);
    store.dispatch = jest.fn();    
    
    const wrapper = mount(
      <Provider store={ store } >
        <CalendarModal />
      </Provider>
    )

    expect( wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'hola pruebas'
      }
    }) );

    wrapper.find('form').simulate('submit', {
      preventDefault(){}
    });

    expect( eventStartAddNew ).toHaveBeenCalledWith({
      end: expect.anything(),
      start: expect.anything(),
      title: 'hola pruebas',
      notes: ''
    })

    expect( eventClearActiveEvent ).toHaveBeenCalledWith(  );

  })

  test('debe validar las fechas', () => {

    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'hola pruebas'
      }
    })

    const hoy = new Date();

    //is same or after
    act(() => {
      wrapper.find('DateTimePicker').at(1).prop('onChange')(hoy)
    });

    wrapper.find('form').simulate('submit', {
      preventDefault(){}
    });

    expect( Swal.fire ).toHaveBeenCalledWith('Error', 'La fecha Fin debe ser mayor a la fecha de Inicio', 'error')

  })
  
  
  
  
  
})