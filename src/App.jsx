// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Users from './views/Users';
import Payments from './views/Payments';
import './App.css'; // Incluye los estilos principales

/**
 * Componente principal de la aplicación.
 * Aquí se configuran las rutas de la aplicación, que permiten cambiar entre las vistas.
 */
function App() {
  return (
    <Router>
      <div className="app">
        {/* Aquí se definen las rutas principales */}
        <Routes>
          <Route path="/" element={<Payments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
