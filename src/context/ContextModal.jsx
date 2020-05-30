import React,{createContext, useEffect, useState} from 'react';
import Axios from 'axios';

// crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {
    
    // crear el useState del context
    const [idreceta, setIdreceta] = useState(null);
    const [recipe, setRecipe] = useState({});

    // una vez que tenemos la receta, llamar la API
    useEffect(() => {
        const obtenerReceta = async() => {
            if (!idreceta) return;
            
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const resultado = await Axios.get(url);
            setRecipe(resultado.data.drinks[0]);
        }
        obtenerReceta();
    }, [idreceta])


    
    return(
        <ModalContext.Provider
        value={{
            recipe,
            setIdreceta,
            setRecipe
        }}>
            {props.children}
        </ModalContext.Provider>
    );
}
export default ModalProvider;

