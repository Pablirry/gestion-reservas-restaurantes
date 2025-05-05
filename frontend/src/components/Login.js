import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Alert } from '@mui/material';
import { loginUser, getUsuarios } from '../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem('token', res.data.token);

      // Obtener el usuario para guardar el rol
      const usuarios = await getUsuarios();
      const usuario = usuarios.data.find(u => u.email === email);
      if (usuario) {
        localStorage.setItem('rol', usuario.rol);
      }

      window.location.href = '/';
    } catch (err) {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Iniciar sesión
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleLogin}>
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
            Entrar
          </Button>
        </form>
      </Box>
    </Container>
  );
}