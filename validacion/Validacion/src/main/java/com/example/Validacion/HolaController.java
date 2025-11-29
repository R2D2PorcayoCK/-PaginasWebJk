package com.example.Validacion;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HolaController {
    @PostMapping(
            path = "/saludo",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public Map<String, String> saludar(@RequestBody Map<String, String> datos) {
        String nombre = datos.get("nombre");
        String password = datos.get("password");

        String mensaje = "Hola " + nombre + " tu password es: " + password;
        return Map.of("mensaje", mensaje);
    }

}
