import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { types } from '../../types/types';
import { login, logout, startLogout, startLoginEmailPassword } from '../../actions/auth';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore( initState );


describe('Pruebas con las acciones de auth', () => {

  beforeEach( () => {
    store = mockStore( initState );
  })
  
  test('login y logout deben crear la accion respetiva', () => {

    const loginAction = login('123', 'Eze');

   expect( loginAction ).toEqual({
     type: types.login,
     payload: {
       uid: '123',
       displayName: 'Eze'
     }
   });

   const logoutAction = logout();
   expect( logoutAction ).toEqual({
     type: types.logout
   });
  });

  test('debe realizar el logout', async() => {

    await store.dispatch( startLogout() );

    const actions = store.getActions();

   expect( actions[0] ).toEqual({
     type: types.logout
   });

   expect( actions[1] ).toEqual({
    type: types.notesLogoutCleaning
  });

   });


   test('debe iniciar startLoginWithEmailPassword', async() => {

    await store.dispatch( startLoginEmailPassword('test@testing.com', '123456') );

    const actions = store.getActions();

    expect( actions[2] ).toEqual({
      type: types.login,
      payload: {
        uid: '4wMwJl0HY4dJKSM5iW1bNszNVqj2',
        displayName: null
      }
    })
   })




})