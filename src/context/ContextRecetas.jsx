import React,{createContext,useState,useEffect} from 'react'
import Axios from 'axios';

export const ContextRecetas = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([]);
    const [searchRecetas, setSearchRecetas] = useState({
        nombre:'',
        categoria:''
    })
    const [consultar, setConsultar] = useState(false);

    // aplicando destructuring
    const {nombre, categoria} = searchRecetas;

    useEffect(() => {
        if (consultar) {
            const obtenerReceta = async() => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
                
                const resultado = await Axios.get(url);
                // console.log(resultado.data.drinks);
                setRecetas(resultado.data.drinks);
            }
                obtenerReceta();
        }
    }, [searchRecetas]);

    return(
        <ContextRecetas.Provider
        value={{
            recetas,
            setSearchRecetas,
            setConsultar

        }}>
            {props.children}
        </ContextRecetas.Provider>

    );
}

export default RecetasProvider;

