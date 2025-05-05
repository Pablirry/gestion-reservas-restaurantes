package com.gestion.backend.controller;

import com.gestion.backend.model.Mesa;
import com.gestion.backend.service.MesaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/mesas")
@CrossOrigin(origins = "http://localhost:3000")
public class MesaController {

    private final MesaService servicio;

    public MesaController(MesaService servicio) {
        this.servicio = servicio;
    }

    @GetMapping
    public List<Mesa> listar() {
        return servicio.listarTodas();
    }

    @GetMapping("/{id}")
    public Optional<Mesa> obtener(@PathVariable Long id) {
        return servicio.obtenerPorId(id);
    }

    @PostMapping
    public Mesa crearMesa(@RequestBody Mesa mesa) {
        return servicio.guardar(mesa);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        servicio.eliminar(id);
    }
}
