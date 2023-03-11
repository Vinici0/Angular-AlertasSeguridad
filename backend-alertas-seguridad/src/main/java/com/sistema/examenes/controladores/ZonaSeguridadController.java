package com.sistema.examenes.controladores;

import com.sistema.examenes.modelo.ZonaSeguridad;
import com.sistema.examenes.servicios.ZonaSeguridadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/zonaSeguridad")
@CrossOrigin(origins = "http://localhost:4200")
public class ZonaSeguridadController {

    @Autowired
    private ZonaSeguridadService zonaSeguridadService;

    //save, update, delete, get, getAll
    @GetMapping("/")
    public List<ZonaSeguridad> getAllZonaSeguridad(){
        return zonaSeguridadService.getAllZonaSeguridad();
    }

    @GetMapping("/{id}")
    public ZonaSeguridad getZonaSeguridadById(@PathVariable Long id){
        return zonaSeguridadService.getZonaSeguridadById(id);
    }

    @PostMapping("/")
    public ZonaSeguridad createZonaSeguridad(@RequestBody ZonaSeguridad zonaSeguridad){
        return zonaSeguridadService.createZonaSeguridad(zonaSeguridad);
    }

    @PutMapping("/{id}")
    public ZonaSeguridad updateZonaSeguridad(@PathVariable Long id, @RequestBody ZonaSeguridad zonaSeguridad){
        return zonaSeguridadService.updateZonaSeguridad(id, zonaSeguridad);
    }

    @DeleteMapping("/{id}")
    public void deleteZonaSeguridad(@PathVariable Long id){
        zonaSeguridadService.deleteZonaSeguridad(id);
    }
}
