import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';
import { registerUser } from '../services/api';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');
    try {
      await registerUser({
        nombre,
        email,
        password,
        rol: 'CLIENTE'
      });
      setMensaje('Usuario registrado correctamente. Ahora puedes iniciar sesión.');
    } catch (err) {
      setError('Error al registrar usuario');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Registrarse
        </Typography>
        {mensaje && <Alert severity="success">{mensaje}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleRegister}>
          <TextField
            margin="normal"
            fullWidth
            label="Nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Contraseña"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
            Registrarse
          </Button>
        </form>
      </Box>
    </Container>
  );
}