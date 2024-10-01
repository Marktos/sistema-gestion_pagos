// src/views/Home.jsx

import React from 'react';

/**
 * Componente Home.
 * Página principal del sistema de gestión de pagos.
 * Esta vista muestra un mensaje de bienvenida y una breve descripción del sistema.
 */
const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenido al Sistema de Gestión de Pagos</h1>
      <p>
        Este sistema permite a los administradores gestionar usuarios y pagos, mientras que
        los usuarios comunes pueden visualizar sus registros de pago y descargar recibos en formato PDF.
      </p>
    </div>
  );
};

export default Home;
