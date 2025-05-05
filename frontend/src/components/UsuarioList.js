import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CircularProgress, Alert } from '@mui/material';
import { getUsuarios } from '../services/api';

export default function UsuarioList() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getUsuarios()
      .then(res => {
        setUsuarios(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudieron cargar los usuarios');
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Usuarios</Typography>
      <Grid container spacing={2}>
        {usuarios.map(usuario => (
          <Grid item xs={12} md={6} lg={4} key={usuario.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{usuario.nombre}</Typography>
                <Typography>Email: {usuario.email}</Typography>
                <Typography>Rol: {usuario.rol}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}