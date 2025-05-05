package com.gestion.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestion.backend.model.Reserva;

import java.util.List;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    List<Reserva> findByUsuarioId(Long usuarioId);
}