import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../components/routers/AppRouter";

describe('Pruebas al AppRouter', () => {
    // Puebas usando el contexto 
    // Creamos el contexto
    const contexValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };
    
    test('should mostrar el login si no estoy autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value = { contexValue }>
                <AppRouter /> 
            </AuthContext.Provider>
        );
        
        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        
    });

    test('should mostrar el componente home si esta autenticado', () => {
    // Creamos el contexto
    const contexValue = {
        dispatch: jest.fn(),
        user: {
            name: "Usuario pruebas",
            logged: true
        }
    }
        const wrapper = mount(
            <AuthContext.Provider value = { contexValue }>
                <AppRouter /> 
            </AuthContext.Provider>
        );
        
        // console.log(wrapper.html());
        expect(wrapper.find('.navbar').exists() ).toBe(true);
    });
    
    
})
