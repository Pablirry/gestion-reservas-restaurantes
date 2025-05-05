package com.gestion.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gestion.backend.model.Horario;

public interface HorarioRepository extends JpaRepository<Horario, Long> {
}