import React from 'react';
import Banner from './Componentes/Banner/index.js';
import Formulario from './Componentes/Formulario/index.js';
import PlanoEstudo from './Componentes/PlanoEstudo/index.js';

function App() {


  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Banner />
      <section className="Principal" style={{ display: 'flex', justifyContent: 'center' }}>
        <Formulario aoCursoCadastrastyle={{ flex: 1, marginRight: '20px' }} />
        <PlanoEstudo style={{ flex: 1, }} />
      </section>
    </div>
  );
}

export default App;



  