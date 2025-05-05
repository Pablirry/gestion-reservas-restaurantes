import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Gestión Reservas Restaurante
        </Typography>
        <Button color="inherit" component={Link} to="/">Reservas</Button>
        <Button color="inherit" component={Link} to="/mesas">Mesas</Button>
        <Button color="inherit" component={Link} to="/horarios">Horarios</Button>
        <Button color="inherit" component={Link} to="/usuarios">Usuarios</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
}