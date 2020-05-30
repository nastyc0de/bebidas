import React,{useContext} from 'react';
import Receta from  './Receta';
import {ContextRecetas} from '../context/ContextRecetas'; 

const RecipeList = () => {
    const {recetas} = useContext(ContextRecetas);
    return ( 
        <div className="row mt-5">
            {recetas.map(receta =>(
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
     );
}
 
export default RecipeList;