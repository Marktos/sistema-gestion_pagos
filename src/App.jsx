import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';         
import 'primeicons/primeicons.css';                        
import LoginView from './views/LoginView';
import { Routes, Route } from 'react-router-dom';
import AdminView from './views/AdminView.jsx'
import UsuarioView from './views/UsuarioView.jsx'

function App() {
  return (
    <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/usuario" element={<UsuarioView/>} />
    </Routes>
  );
}

export default App;
