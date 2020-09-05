import '@testing-library/jest-dom'
import { types } from '../../types/types';

const { setError, removeError, startLoading, finishLoading } = require("../../actions/ui")


describe('Pruebas en ui-actions', () => {

  test('todas las acciones deben de funcionar', () => {

    const action = setError('Error!!!!');

    expect( action ).toEqual({
      type: types.uiSetError,
      payload: 'Error!!!!'
    });

    const removeErrorAction = removeError();
    const startLoadingAction = startLoading();
    const finishLoadingAction = finishLoading();

    expect(removeErrorAction).toEqual({
      type: types.uiRemoveError
    });

    expect(startLoadingAction).toEqual({
      type: types.uiStartLoading
    });

    expect(finishLoadingAction).toEqual({
      type: types.uiFinishLoading
    });
    
  })
})