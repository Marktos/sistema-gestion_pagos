// src/views/Payments.jsx

import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

/**
 * Componente Payments.
 * Página para que los administradores registren y los usuarios visualicen sus pagos.
 */
const Payments = () => {
  const [payments, setPayments] = useState([]);

  const handleRegisterPayment = () => {
    const newPayment = {
      id: payments.length + 1,
      amount: 100,
      date: new Date().toLocaleDateString(),
      user: 'Juan Pérez',
    };
    setPayments([...payments, newPayment]);
  };

  return (
    <div className="payments">
      <h1>Gestión de Pagos</h1>
      <Button label="Registrar Pago" icon="pi pi-plus" onClick={handleRegisterPayment} className="p-button-success" />
      
      <div className="payment-list">
        {payments.map((payment) => (
          <Card key={payment.id} title={`Pago de ${payment.user}`} style={{ marginBottom: '20px' }}>
            <p>Cantidad: {payment.amount}</p>
            <p>Fecha: {payment.date}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Payments;
