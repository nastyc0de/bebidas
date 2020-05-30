import React,{createContext, useState, useEffect} from 'react';
import Axios from 'axios';

// crear los context

export const ContextCategoria = createContext();

// Provider, es donde se encuentran las funciones y el state

const CategoriaProvider = (props) => {

    // Creando el state del context
    const [categorias, setCategoria] = useState([]);
    
    
    // ejecutar el llamado de la API usando useEffect
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categorias = await Axios.get(url);
            setCategoria(categorias.data.drinks);
        }
        obtenerCategorias();
    }, [])
    
    return(
        <ContextCategoria.Provider
            value = {{
                categorias
            }}
        >
            {props.children}
        </ContextCategoria.Provider>
    )
}
export default CategoriaProvider;
