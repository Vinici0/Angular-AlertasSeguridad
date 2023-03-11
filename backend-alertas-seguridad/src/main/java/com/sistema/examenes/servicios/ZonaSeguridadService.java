package com.sistema.examenes.servicios;

import com.sistema.examenes.modelo.ZonaSeguridad;
import com.sistema.examenes.repositorios.ZonaSeguridadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZonaSeguridadService {

    @Autowired
    private ZonaSeguridadRepository zonaSeguridadRepository;


    public List<ZonaSeguridad> getAllZonaSeguridad(){
        return zonaSeguridadRepository.findAll();
    }

    public ZonaSeguridad getZonaSeguridadById(Long id){
        return zonaSeguridadRepository.findById(id).get();
    }

    public ZonaSeguridad createZonaSeguridad(ZonaSeguridad zonaSeguridad){
        return zonaSeguridadRepository.save(zonaSeguridad);
    }

    public ZonaSeguridad updateZonaSeguridad(Long id, ZonaSeguridad zonaSeguridad){
        ZonaSeguridad zonaSeguridadDB = getZonaSeguridadById(id);
        zonaSeguridadDB.setNombre(zonaSeguridad.getNombre());
        zonaSeguridadDB.setUbicacion(zonaSeguridad.getUbicacion());
        return zonaSeguridadRepository.save(zonaSeguridadDB);
    }

    public void deleteZonaSeguridad(Long id){
        zonaSeguridadRepository.deleteById(id);
    }
}
