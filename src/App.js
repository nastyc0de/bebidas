import React,{Fragment} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import RecipeList from './components/RecipeList.jsx';

import ContextCategoria from './context/ContextCategoria';
import ContextRecetas from './context/ContextRecetas';
import ContextModal from './context/ContextModal';

function App() {
  return (
    <ContextCategoria >
      <ContextRecetas>
        <ContextModal>
          <Header/>
            <div className='container mt-5'>
              <div className='row'>
                <Form/>
              </div>
                <RecipeList/>
            </div>
        </ContextModal>
      </ContextRecetas>
    </ContextCategoria >
  );
}

export default App;
