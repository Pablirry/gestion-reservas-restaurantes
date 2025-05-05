package com.gestion.backend.service;

import org.springframework.stereotype.Service;

import com.gestion.backend.model.Usuario;
import com.gestion.backend.repository.UsuarioRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    private final UsuarioRepository repo;

    public UsuarioService(UsuarioRepository repo) {
        this.repo = repo;
    }

    public List<Usuario> listarTodos() {
        return repo.findAll();
    }

    public Optional<Usuario> obtenerPorId(Long id) {
        return repo.findById(id);
    }

    public Optional<Usuario> obtenerPorEmail(String email) {
        return repo.findByEmail(email);
    }

    public Usuario guardar(Usuario usuario) {
        return repo.save(usuario);
    }

    public void eliminar(Long id) {
        repo.deleteById(id);
    }
}
