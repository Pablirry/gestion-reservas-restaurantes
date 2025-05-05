package com.gestion.backend.controller;

import com.gestion.backend.model.Horario;
import com.gestion.backend.service.HorarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/horarios")
@CrossOrigin
public class HorarioController {

    private final HorarioService servicio;

    public HorarioController(HorarioService servicio) {
        this.servicio = servicio;
    }

    @GetMapping
    public List<Horario> listar() {
        return servicio.listarTodos();
    }

    @GetMapping("/{id}")
    public Optional<Horario> obtener(@PathVariable Long id) {
        return servicio.obtenerPorId(id);
    }

    @PostMapping
    public Horario crear(@RequestBody Horario horario) {
        return servicio.guardar(horario);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        servicio.eliminar(id);
    }
}
