// src/components/InputComponent.jsx

import React from 'react';
import { InputText } from 'primereact/inputtext';

/**
 * Componente reutilizable de Input.
 * Props:
 * - label: Etiqueta para el input.
 * - value: Valor del input controlado.
 * - type: Tipo de input (texto, email, password, etc.).
 * - onChange: Función para actualizar el valor del input.
 */
const InputComponent = ({ label, value, type = 'text', onChange }) => {
  return (
    <div className="input-component">
      <label className="input-label">{label}</label>
      <InputText value={value} type={type} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default InputComponent;
