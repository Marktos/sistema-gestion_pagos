import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password'; // Importa el componente Password
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { useNavigate } from 'react-router-dom';

export default function LoginView() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/admin');
    };

    return (
        <>
            <div className="flex align-items-center justify-content-center min-h-screen">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <div className="text-900 text-3xl font-medium mb-3">Bienvenido al sistema de gestion</div>
                        <span className="text-600 font-medium line-height-3">No tienes cuenta?</span>
                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Inicia Hoy!</a>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Contraseña</label>
                        
                        <Password id="password" toggleMask placeholder="Password" className="w-full mb-3" />

                        <div className="flex align-items-center justify-content-between mb-6">
                            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Olvidaste tu contraseña?</a>
                        </div>

                        <Button label="Iniciar Sesión" icon="pi pi-user" className="w-full" onClick={handleSignIn} />
                    </div>
                </div>
            </div>
        </>
    );
}
