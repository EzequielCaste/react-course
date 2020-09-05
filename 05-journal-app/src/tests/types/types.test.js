import { types } from '../../types/types';
import '@testing-library/jest-dom';



describe('Prueba de types', () => {
  test('Verificar si está bien escrito todo', () => {
    expect( types ).toEqual({
      uiSetError: '[UI] Set Error',
      uiRemoveError: '[UI] Remove Error',
      
      login: '[Auth] Login',
      logout: '[Auth] Logout',
      
      uiStartLoading: '[UI] Start loading',
      uiFinishLoading: '[UI] Finish loading',
    
      notesAddNew: '[Notes] New note',
      notesActive: '[Notes] Set active note',
      notesLoad: '[Notes] Load notes',
      notesUpdated: '[Notes] Updated note',
      notesFileUrl: '[Notes] Updated image url',
      notesDelete: '[Notes] Delete note',
      notesLogoutCleaning: '[Notes] Logout Cleaning',    
    })
  })
})