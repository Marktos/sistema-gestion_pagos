import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import HeaderComponent from '../components/HeaderComponent.jsx';
import SidebarComponent from '../components/SideBarComponent.jsx';

export default function UserView() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

    // Ejemplo de datos de pagos
    const completedPayments = [
        { id: 1, amount: '$100', date: '2024-01-01' },
        { id: 2, amount: '$150', date: '2024-02-01' },
        { id: 3, amount: '$200', date: '2024-03-01' },
    ];

    const pendingPayments = [
        { id: 4, amount: '$120', date: '2024-10-01' },
        { id: 5, amount: '$80', date: '2024-11-01' },
    ];

    return (
        <div>
            <HeaderComponent />
            <Button 
                icon="pi pi-bars" 
                onClick={() => setSidebarVisible(true)} 
                className="p-m-2" 
                aria-label="Toggle Sidebar"
            />
            <SidebarComponent visible={sidebarVisible} onHide={() => setSidebarVisible(false)} />

            <div className="p-grid">
                <div className="p-col-12 p-md-6">
                    <Card title="Pagos Realizados" className="p-m-2">
                        <ul>
                            {completedPayments.map(payment => (
                                <li key={payment.id}>
                                    {payment.amount} - {payment.date}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>

                <div className="p-col-12 p-md-6">
                    <Card title="Pagos Pendientes" className="p-m-2">
                        <ul>
                            {pendingPayments.map(payment => (
                                <li key={payment.id}>
                                    {payment.amount} - {payment.date}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
}
