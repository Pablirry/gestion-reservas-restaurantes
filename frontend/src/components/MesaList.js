import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CircularProgress, Alert, Button, Box, TextField } from '@mui/material';
import { getMesas, createMesa } from '../services/api';

export default function MesaList() {
  const [mesas, setMesas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [numero, setNumero] = useState('');
  const [capacidad, setCapacidad] = useState('');
  const [mensaje, setMensaje] = useState('');

  const cargarMesas = () => {
    setLoading(true);
    getMesas()
      .then(res => {
        setMesas(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudieron cargar las mesas');
        setLoading(false);
      });
  };

  useEffect(() => {
    cargarMesas();
  }, []);

  const handleAddMesa = async (e) => {
    e.preventDefault();
    setMensaje('');
    try {
      await createMesa({
        numero: parseInt(numero, 10),
        capacidad: parseInt(capacidad, 10)
      });
      setMensaje('Mesa añadida correctamente');
      setNumero('');
      setCapacidad('');
      cargarMesas();
    } catch {
      setMensaje('Error al añadir mesa');
    }
  };

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Mesas</Typography>
      <Box component="form" onSubmit={handleAddMesa} sx={{ mb: 4, display: 'flex', gap: 2 }}>
        <TextField
          label="Número de mesa"
          value={numero}
          onChange={e => setNumero(e.target.value)}
          required
        />
        <TextField
          label="Capacidad"
          type="number"
          value={capacidad}
          onChange={e => setCapacidad(e.target.value)}
          required
        />
        <Button type="submit" variant="contained">Añadir Mesa</Button>
      </Box>
      {mensaje && <Alert severity="info">{mensaje}</Alert>}
      <Grid container spacing={2}>
        {mesas.map(mesa => (
          <Grid item xs={6} md={3} key={mesa.id}>
            <Card sx={{ minHeight: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#e3f2fd' }}>
              <CardContent>
                <Typography variant="h5" align="center">Mesa {mesa.numero}</Typography>
                <Typography align="center">Capacidad: {mesa.capacidad}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}