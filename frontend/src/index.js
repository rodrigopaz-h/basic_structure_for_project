import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import './styles/main.css';

// En este archivo se importa 'React' y 'ReactDOM' para renderizar la aplicación en el DOM
// Se importa 'App' del archivo 'App.js' en la carpeta 'src'
// Se importa 'AuthProvider' del archivo 'AuthContext.js' en la carpeta 'context'
// Se importa el archivo de estilos 'main.css' de la carpeta 'styles'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// En este archivo se renderiza el componente 'App' dentro del proveedor de contexto 'AuthProvider'
// El componente 'App' se monta en el elemento con id 'root' en el archivo 'index.html'
