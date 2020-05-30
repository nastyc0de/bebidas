import React, { useContext, useState } from 'react';
import {ContextCategoria} from '../context/ContextCategoria';
import {ContextRecetas} from '../context/ContextRecetas';


const Form = () => {

    // useStates de la aplicacion
    const [search, setSearch] = useState({
        nombre:'',
        categoria:''
    });
    
    const {categorias} = useContext(ContextCategoria);
    const {setSearchRecetas,setConsultar} = useContext(ContextRecetas);
    
    // funcion para leer los contenidos 

    const obtenerDatosReceta = e =>{
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }
    
    return ( 
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                setSearchRecetas(search);
                setConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca por Categoría o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                            {categorias.map(categoria =>(
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <button
                        type="submit"
                        className="btn btn-block btn-primary"
                    >Buscar bebida</button>
                </div>
            </div>
        </form>
     );
}
 
export default Form;