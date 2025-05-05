import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, MenuItem, Alert, Box } from '@mui/material';
import axios from 'axios';

export default function ReservaForm() {
  const [usuarios, setUsuarios] = useState([]);
  const [mesas, setMesas] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [form, setForm] = useState({
    usuarioId: '',
    mesaId: '',
    horarioId: '',
    cantidadPersonas: '',
    comentario: ''
  });
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/usuarios').then(res => setUsuarios(res.data));
    axios.get('http://localhost:8080/api/mesas').then(res => setMesas(res.data));
    axios.get('http://localhost:8080/api/horarios').then(res => setHorarios(res.data));
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMensaje('');
    setError('');
    try {
      await axios.post('http://localhost:8080/api/reservas', {
        usuario: { id: form.usuarioId },
        mesa: { id: form.mesaId },
        horario: { id: form.horarioId },
        cantidadPersonas: form.cantidadPersonas,
        comentario: form.comentario
      });
      setMensaje('Reserva creada correctamente');
    } catch {
      setError('Error al crear la reserva');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Crear Reserva</Typography>
      {mensaje && <Alert severity="success">{mensaje}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          select
          label="Usuario"
          name="usuarioId"
          value={form.usuarioId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        >
          {usuarios.map(u => <MenuItem key={u.id} value={u.id}>{u.nombre}</MenuItem>)}
        </TextField>
        <TextField
          select
          label="Mesa"
          name="mesaId"
          value={form.mesaId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        >
          {mesas.map(m => <MenuItem key={m.id} value={m.id}>Mesa {m.numero} (Capacidad: {m.capacidad})</MenuItem>)}
        </TextField>
        <TextField
          select
          label="Horario"
          name="horarioId"
          value={form.horarioId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        >
          {horarios.map(h => (
            <MenuItem key={h.id} value={h.id}>
              {h.fecha} - {h.horaInicio} a {h.horaFin}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Cantidad de Personas"
          name="cantidadPersonas"
          type="number"
          value={form.cantidadPersonas}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Comentario"
          name="comentario"
          value={form.comentario}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Reservar</Button>
      </Box>
    </Container>
  );
}