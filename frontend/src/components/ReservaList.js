import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';

export default function ReservaList() {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/reservas')
      .then(res => {
        setReservas(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudieron cargar las reservas');
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Reservas</Typography>
      <Grid container spacing={2}>
        {reservas.map(reserva => (
          <Grid item xs={12} md={6} lg={4} key={reserva.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">Reserva #{reserva.id}</Typography>
                <Typography>Usuario: {reserva.usuario?.nombre}</Typography>
                <Typography>Mesa: {reserva.mesa?.numero}</Typography>
                <Typography>Personas: {reserva.cantidadPersonas}</Typography>
                <Typography>Comentario: {reserva.comentario}</Typography>
                <Typography>
                  Fecha: {reserva.horario?.fecha} - {reserva.horario?.horaInicio} a {reserva.horario?.horaFin}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}