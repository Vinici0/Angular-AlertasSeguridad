package com.sistema.examenes.servicios;

import com.sistema.examenes.modelo.Alerta;
import com.sistema.examenes.repositorios.AlertaSegurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlertaService {

    @Autowired
    private AlertaSegurityRepository alertaSegurityRepository;

    public  List<Object[]> getAllAlerta(){
        return alertaSegurityRepository.findAllAlertaAndSensor();
    }

    public Alerta getAlertaById(Long id){
        return alertaSegurityRepository.findById(id).get();
    }

    public Alerta createAlerta(Alerta alerta){
        return alertaSegurityRepository.save(alerta);
    }
    public Optional<Alerta> getOneAlerta(Long id){
        return alertaSegurityRepository.findById(id);
    }

    public Alerta updateAlerta(Long id, Alerta alerta){
        Alerta alertaDB = getAlertaById(id);
        alertaDB.setDescripcionAlerta(alerta.getDescripcionAlerta());
        alertaDB.setFechaAlerta(alerta.getFechaAlerta());
        return alertaSegurityRepository.save(alertaDB);
    }
    public boolean existsAlerta(Long id){
        return alertaSegurityRepository.existsById(id);
    }

    public void deleteAlerta(Long id){
        alertaSegurityRepository.deleteById(id);
    }
}
