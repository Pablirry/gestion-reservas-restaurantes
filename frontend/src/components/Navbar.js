import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const token = localStorage.getItem('token');
  const rol = localStorage.getItem('rol');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gestión Reservas Restaurante
        </Typography>
        {!token && (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Registrarse</Button>
          </>
        )}
        {token && rol === 'ADMIN' && (
          <>
            <Button color="inherit" component={Link} to="/">Reservas</Button>
            <Button color="inherit" component={Link} to="/mesas">Mesas</Button>
            <Button color="inherit" component={Link} to="/horarios">Horarios</Button>
            <Button color="inherit" component={Link} to="/usuarios">Usuarios</Button>
            <Button color="inherit" onClick={handleLogout}>Cerrar sesión</Button>
          </>
        )}
        {token && rol === 'CLIENTE' && (
          <>
            <Button color="inherit" component={Link} to="/">Reservas</Button>
            <Button color="inherit" component={Link} to="/reservar">Nueva Reserva</Button>
            <Button color="inherit" onClick={handleLogout}>Cerrar sesión</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}