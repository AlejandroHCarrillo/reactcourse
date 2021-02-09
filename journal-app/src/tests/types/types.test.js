import { types } from "../../types/types"
import '@testing-library/jest-dom'

describe('Probando types.js', () => {
    const expTypes = {
        login: '[Auth] Login',
        logout: '[Auth] Logout',
    
        startinglogout: '[auth] Starting Logout',
        finishlogout: '[auth] Finishing Logout',
    
        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',
    
        uiStartLoading: '[UI] Start loading',
        uiFinishLoading: '[UI] Finish loading',
    
        notesAddNew: '[Notes] Add new note',
        notesActive: '[Notes] Set active note',
        notesLoad: '[Notes] Load Notes',
        notesUpdated: '[Notes] Note updated',
        notesFileUrl: '[Notes] Note Updated',
        notesDelNote: '[Notes] Delete note',
        notesLogoutClean: '[Notes] Logout Cleanning',
        
        // notes: '[Notes] ',
    
    };

    // console.log(expTypes);
    // console.log(types);

    test('should ser los mismos tipos existentes', () => {
        expect(types).toMatchObject(expTypes);
    })
    
})
