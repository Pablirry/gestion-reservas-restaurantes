import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../frontend/src/components/Navbar';
import ReservaList from '../frontend/src/components/ReservaList';
import ReservaForm from '../frontend/src/components/ReservaForm';
import MesaList from '../frontend/src/components/MesaList';
import HorarioList from '../frontend/src/components/HorarioList';
import UsuarioList from '../frontend/src/components/UsuarioList';
import Login from '../frontend/src/components/Login';
import Register from '../frontend/src/components/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ReservaList />} />
        <Route path="/reservar" element={<ReservaForm />} />
        <Route path="/mesas" element={<MesaList />} />
        <Route path="/horarios" element={<HorarioList />} />
        <Route path="/usuarios" element={<UsuarioList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;