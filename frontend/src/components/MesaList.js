import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';

export default function MesaList() {
  const [mesas, setMesas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/mesas')
      .then(res => {
        setMesas(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudieron cargar las mesas');
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Mesas</Typography>
      <Grid container spacing={2}>
        {mesas.map(mesa => (
          <Grid item xs={12} md={6} lg={4} key={mesa.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">Mesa #{mesa.numero}</Typography>
                <Typography>Capacidad: {mesa.capacidad}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}