import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReservaList from './components/ReservaList';
import ReservaForm from './components/ReservaForm';
import MesaList from './components/MesaList';
import HorarioList from './components/HorarioList';
import UsuarioList from './components/UsuarioList';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: 24 }}>
        <Routes>
          {/* Solo muestra login y registro si NO hay token */}
          {!token && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}
          {/* Rutas protegidas para ADMIN */}
          {token && (
            <>
              <Route path="/" element={
                <PrivateRoute roles={['ADMIN', 'CLIENTE']}>
                  <ReservaList />
                </PrivateRoute>
              } />
              <Route path="/reservar" element={
                <PrivateRoute roles={['CLIENTE']}>
                  <ReservaForm />
                </PrivateRoute>
              } />
              <Route path="/mesas" element={
                <PrivateRoute roles={['ADMIN']}>
                  <MesaList />
                </PrivateRoute>
              } />
              <Route path="/horarios" element={
                <PrivateRoute roles={['ADMIN']}>
                  <HorarioList />
                </PrivateRoute>
              } />
              <Route path="/usuarios" element={
                <PrivateRoute roles={['ADMIN']}>
                  <UsuarioList />
                </PrivateRoute>
              } />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;