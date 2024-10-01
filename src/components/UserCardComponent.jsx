import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const UserCardComponent = ({ user }) => {
    const toast = React.useRef(null);

    const handleEdit = () => {
        toast.current.show({ severity: 'info', summary: 'Editando', detail: `Editando a ${user.name}`, life: 3000 });
    };

    const handleDelete = () => {
        toast.current.show({ severity: 'warn', summary: 'Eliminado', detail: `Eliminado a ${user.name}`, life: 3000 });
    };

    return (
        <Card title={user.name} className="mb-3" footer={
            <div className="flex justify-content-between">
                <Button label="Editar" icon="pi pi-pencil" onClick={handleEdit} />
                <Button label="Eliminar" icon="pi pi-trash" className="p-button-danger" onClick={handleDelete} />
            </div>
        }>
            <p>Email: {user.email}</p>
            <Toast ref={toast} />
        </Card>
    );
};

export default UserCardComponent;
