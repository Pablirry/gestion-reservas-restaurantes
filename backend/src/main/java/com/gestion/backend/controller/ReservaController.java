package com.gestion.backend.controller;

import com.gestion.backend.model.Reserva;
import com.gestion.backend.service.ReservaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin(origins = "http://localhost:3000")
public class ReservaController {

    private final ReservaService servicio;

    public ReservaController(ReservaService servicio) {
        this.servicio = servicio;
    }

    @GetMapping
    public List<Reserva> listar() {
        return servicio.listarTodas();
    }

    @GetMapping("/usuario/{id}")
    public List<Reserva> porUsuario(@PathVariable Long id) {
        return servicio.listarPorUsuario(id);
    }

    @PostMapping
    public Reserva crear(@RequestBody Reserva reserva) {
        return servicio.guardar(reserva);
    }

    @GetMapping("/{id}")
    public Optional<Reserva> obtener(@PathVariable Long id) {
        return servicio.obtenerPorId(id);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        servicio.eliminar(id);
    }
}
