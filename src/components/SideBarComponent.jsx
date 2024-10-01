import React from 'react';
import { Button } from 'primereact/button'; 
import { useNavigate } from 'react-router-dom'; // Importar useNavigate de react-router-dom
import { Sidebar } from 'primereact/sidebar';

const SidebarComponent = ({ visible, onHide }) => {
    const navigate = useNavigate();

    const handleAdminClick = () => {
        navigate('/admin'); 
        onHide();
    };

    const handleUserClick = () => {
        navigate('/usuario'); 
        onHide();
    };

    const handleFileClick = () => {
    };

    return (
        <Sidebar visible={visible} onHide={onHide} className="p-sidebar">
            <aside className="p-4 border-round w-full">
                <ul className="list-none p-0">
                    <li className="mb-5">
                        <Button label="Admin" icon="pi pi-cog" className="w-full" onClick={handleAdminClick} />
                    </li>
                    <li className="mb-5">
                        <Button label="Usuarios" icon="pi pi-users" className="w-full" onClick={handleUserClick} />
                    </li>
                    <li className="mb-5">
                        <Button label="Archivos" icon="pi pi-file" className="w-full" onClick={handleFileClick} />
                    </li>
                </ul>
            </aside>
        </Sidebar>
    );
};

export default SidebarComponent;
