package com.gestion.backend.service;

import com.gestion.backend.model.Reserva;
import com.gestion.backend.repository.ReservaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {

    private final ReservaRepository repo;

    public ReservaService(ReservaRepository repo) {
        this.repo = repo;
    }

    public List<Reserva> listarTodas() {
        return repo.findAll();
    }

    public List<Reserva> listarPorUsuario(Long usuarioId) {
        return repo.findByUsuarioId(usuarioId);
    }

    public Optional<Reserva> obtenerPorId(Long id) {
        return repo.findById(id);
    }

    public Reserva guardar(Reserva reserva) {
        return repo.save(reserva);
    }

    public void eliminar(Long id) {
        repo.deleteById(id);
    }
}
