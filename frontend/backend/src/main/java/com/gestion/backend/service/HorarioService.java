package com.gestion.backend.service;

import com.gestion.backend.model.Horario;
import com.gestion.backend.repository.HorarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HorarioService {

    private final HorarioRepository repo;

    public HorarioService(HorarioRepository repo) {
        this.repo = repo;
    }

    public List<Horario> listarTodos() {
        return repo.findAll();
    }

    public Optional<Horario> obtenerPorId(Long id) {
        return repo.findById(id);
    }

    public Horario guardar(Horario horario) {
        return repo.save(horario);
    }

    public void eliminar(Long id) {
        repo.deleteById(id);
    }
}
