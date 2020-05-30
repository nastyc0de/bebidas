import React,{useContext, useState} from 'react';
import {ModalContext} from '../context/ContextModal';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


const Receta = ({receta}) => {

    // configuracion del modal de material UI
    const [modalStyle]  = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    // extraer los valores del context
    const {recipe, setIdreceta, setRecipe} = useContext(ModalContext);
    
    // funcion para mostrar ingredientes
    const mostrarIngredientes = recipe =>{
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if (recipe[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]} </li>
                )
            }
            
        }
        return ingredientes;
    }
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />
                <div className="card-body">
                    <button
                    type='button'
                    className='btn btn-clock btn-primary'
                    onClick={() =>{
                        setIdreceta(receta.idDrink);
                        handleOpen();
                    }}>Ver Receta

                    </button>
                    <Modal
                        open={open}
                        onClose={() =>{
                            setIdreceta(null);
                            setRecipe({})
                            handleClose();
                        }}
                    >
                        <div style = {modalStyle} className={classes.paper}>
                            <h2>{recipe.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {recipe.strInstructions}
                            </p>
                            <img src={recipe.strDrinkThumb} className="img-fluid my-4" alt={recipe.strDrink}/>

                            <h3>Ingredientes</h3>
                            <ul>
                                {mostrarIngredientes(recipe)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;