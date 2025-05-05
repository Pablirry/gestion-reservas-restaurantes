package com.gestion.backend.service;

import org.springframework.stereotype.Service;

import com.gestion.backend.model.Mesa;
import com.gestion.backend.repository.MesaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MesaService {

    private final MesaRepository repo;

    public MesaService(MesaRepository repo) {
        this.repo = repo;
    }

    public List<Mesa> listarTodas() {
        return repo.findAll();
    }

    public Optional<Mesa> obtenerPorId(Long id) {
        return repo.findById(id);
    }

    public Mesa guardar(Mesa mesa) {
        return repo.save(mesa);
    }

    public void eliminar(Long id) {
        repo.deleteById(id);
    }
}
