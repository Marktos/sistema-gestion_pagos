import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import HeaderComponent from '../components/HeaderComponent.jsx';
import SidebarComponent from '../components/SideBarComponent.jsx';
import UserCardComponent from '../components/UserCardComponent.jsx';

export default function AdminView() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const users = [
        { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
        { id: 2, name: 'Ana Gómez', email: 'ana@example.com' },
        { id: 3, name: 'Luis Fernández', email: 'luis@example.com' },
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

            <div className="flex flex-column align-items-center justify-content-center min-h-screen">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-8">
                    <h2 className="text-900 mb-3">Administración</h2>
                    <TabView>
                        <TabPanel header="Usuarios">
                            <div>
                                <p className="text-600 mb-2">Gestione los usuarios aquí.</p>
                                <div className="flex mb-3">
                                    <Button label="Agregar Usuario" icon="pi pi-plus" className="mr-2" />
                                    <Button label="Eliminar Usuario" icon="pi pi-trash" />
                                </div>
                                <h3 className="text-center mb-2">Lista de Usuarios</h3>
                                <div className="p-grid">
                                    {users.map(user => (
                                        <div className="p-col-12 p-md-4" key={user.id}>
                                            <UserCardComponent user={user} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Archivos">
                            <div>
                                <p className="text-600 mb-2">Gestione los archivos aquí.</p>
                                <div className="flex mb-3">
                                    <Button label="Subir Archivo" icon="pi pi-upload" className="mr-2" />
                                    <Button label="Eliminar Archivo" icon="pi pi-trash" />
                                </div>
                            </div>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </div>
    );
}
