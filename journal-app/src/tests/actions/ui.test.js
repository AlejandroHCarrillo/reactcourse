import "@testing-library/jest-dom"
import { finishLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('Pruebas en ui-actions', () => {
    const errMsg = 'Hubo un error...';

    const errorExpected = {
        type: types.uiSetError,
        payload: errMsg 
    }
    
    test('should deben funcionar todas las acciones', () => {

        const setErrorAction = setError(errMsg);
        const removeErrorAction = removeError();
        const startLoadingAction = startLoading();
        const finishLoadingAction = finishLoading();

        expect(setErrorAction).toEqual(errorExpected);
        expect(removeErrorAction).toEqual({ type: types.uiRemoveError });
        expect(startLoadingAction).toEqual({ type: types.uiStartLoading });
        expect(finishLoadingAction).toEqual({ type: types.uiFinishLoading });
    });
    
    
})
