import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReservaList from './components/ReservaList';
import ReservaForm from './components/ReservaForm';
import MesaList from './components/MesaList';
import HorarioList from './components/HorarioList';
import UsuarioList from './components/UsuarioList';
import Login from './components/Login';
import Register from './components/Register';

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