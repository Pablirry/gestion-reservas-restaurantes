package com.gestion.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestion.backend.model.Usuario;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
}
