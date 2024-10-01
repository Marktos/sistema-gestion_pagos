// src/views/Users.jsx

import React, { useState, useEffect } from 'react';

/**
 * Componente Users.
 * Página para que los administradores gestionen usuarios (crear, editar, eliminar).
 * Esta vista permite visualizar la lista de usuarios y realizar acciones administrativas.
 */
const Users = () => {
  const [users, setUsers] = useState([]);

  // Simulación de un fetch de usuarios (en un proyecto real, reemplazar con API)
  useEffect(() => {
    // Simulamos la carga de datos
    const fetchedUsers = [
      { id: 1, name: 'Juan Pérez', role: 'Admin' },
      { id: 2, name: 'María Gómez', role: 'Usuario' },
    ];
    setUsers(fetchedUsers);
  }, []);

  return (
    <div className="users">
      <h1>Gestión de Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
