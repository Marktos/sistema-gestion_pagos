import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom'; 

const HeaderComponent = () => {
    const navigate = useNavigate(); 

    const handleLogout = () => {
  
        console.log('Sesión cerrada');
        navigate('/');
    };

    return (
        <header className="p-d-flex p-ai-center p-jc-between" style={{ padding: '1rem', borderBottom: '2px solid #ccc' }}>
            <div className="p-text-bold" style={{ fontSize: '1.5rem' }}>ADMIN</div>
            <Button 
                label="Cerrar sesión" 
                icon="pi pi-sign-out" 
                className="p-button-danger" 
                onClick={handleLogout} 
            />
        </header>
    );
};

export default HeaderComponent;
