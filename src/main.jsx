import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext'; // ✅ importá el contexto

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* ✅ envolvemos la app con el proveedor de sesión */}
      <App />
    </AuthProvider>
  </StrictMode>
);
