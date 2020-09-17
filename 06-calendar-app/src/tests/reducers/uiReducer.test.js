const { uiOpenModal, uiCloseModal } = require("../../actions/ui");
const { uiReducer } = require("../../reducers/uiReducer");
const { types } = require("../../types/types");

const initState = {
  modalOpen: false
}

describe('Pruebas en uiReducer', () => {

  test('debe retornar el estado por defecto', () => {
    
    const state = uiReducer(initState, {} );
    expect( state ).toEqual( initState );

  })

  test('debe abrir y cerrar el modal', () => {
    
    const modalOpen = uiOpenModal();
    const state = uiReducer(initState, modalOpen);

    expect(state).toEqual( { modalOpen: true } );

    const modalClose = uiCloseModal();
    const stateClose = uiReducer( initState, modalClose );

    expect(stateClose).toEqual( { modalOpen: false } );

  })
  
  
})