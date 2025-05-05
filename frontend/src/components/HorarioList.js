import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CircularProgress, Alert } from '@mui/material';
import { getHorarios } from '../services/api';

export default function HorarioList() {
  const [horarios, setHorarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getHorarios()
      .then(res => {
        setHorarios(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudieron cargar los horarios');
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Horarios</Typography>
      <Grid container spacing={2}>
        {horarios.map(horario => (
          <Grid item xs={12} md={6} lg={4} key={horario.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{horario.fecha}</Typography>
                <Typography>De {horario.horaInicio} a {horario.horaFin}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}