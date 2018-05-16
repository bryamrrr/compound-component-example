import React from 'react';
import SimpleProcess from './components/SimpleProcess';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const steps = [
  { label: 'Paso 1: Datos personales', component: () => <div>Contenido 1</div> },
  { label: 'Paso 2: Datos de facturación', component: () => <div>Contenido 2</div> },
];
const App = () => (
  <div>
    <button className='btn btn-primary'>Regresar al home</button>
    <h1>Registro de usuario</h1>
    <SimpleProcess steps={steps} />
  </div>
);

export default App;
