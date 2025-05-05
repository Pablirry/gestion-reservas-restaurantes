package com.gestion.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.gestion.backend.model.Mesa;

public interface MesaRepository extends JpaRepository<Mesa, Long> {
}