package com.gestion.backend.controller;

import com.gestion.backend.model.Usuario;
import com.gestion.backend.service.UsuarioService;
import com.gestion.backend.util.JwtTokenUtil;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final UsuarioService usuarioService;
    private final JwtTokenUtil jwtTokenUtil;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthController(UsuarioService usuarioService, JwtTokenUtil jwtTokenUtil, BCryptPasswordEncoder passwordEncoder) {
        this.usuarioService = usuarioService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/registro")
    public Map<String, String> registrar(@RequestBody Usuario usuario) {
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword())); // Encriptar la contraseña
        usuarioService.guardar(usuario);
        Map<String, String> response = new HashMap<>();
        response.put("mensaje", "Usuario registrado exitosamente");
        return response;
    }

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Usuario usuario) {
        Usuario usuarioExistente = usuarioService.obtenerPorEmail(usuario.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (passwordEncoder.matches(usuario.getPassword(), usuarioExistente.getPassword())) {
            String token = jwtTokenUtil.generarToken(usuario.getEmail());
            Map<String, String> response = new HashMap<>();
            response.put("token", "Bearer " + token);
            return response;
        } else {
            throw new RuntimeException("Credenciales incorrectas");
        }
    }
}
