const { types } = require("../../types/types");

describe('Pruebas en Types', () => {

  test('los types deben coincidir', () => {
    
    expect( types ).toEqual({

      uiOpenModal: '[ui] Open modal',
      uiCloseModal: '[ui] Close modal',
    
      eventStartAddNew: '[event] Start add new',
      eventAddNEw: '[event] Add new',
    
      eventSetActive: '[event] Set active',
      eventClearActiveEvent: '[event] Clear active event',
      eventUpdated: '[event] Event updated',
      eventDeleted: '[event] Event deleted',
      eventLoaded: '[event] Event loaded',
      eventLogout: '[event] Event logout',
    
      authCheckingFinish: '[auth] Finish checking login state',
      authStartLogin: '[auth] Start login',
      authLogin: '[auth] Login',
      authStartRegister: '[auth] Start register',
      authStartTokenRenew: '[auth]  Start token renewal',
      authLogout: '[auth]  Logout'
    })

  })
  
})