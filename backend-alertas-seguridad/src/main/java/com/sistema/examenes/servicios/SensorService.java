package com.sistema.examenes.servicios;

import com.sistema.examenes.modelo.Sensor;
import com.sistema.examenes.repositorios.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SensorService {

    @Autowired
    private SensorRepository sensorRepository;

    //    List<Object[]> findAllSensoresAndZonaSeguridad();
    public List<Object[]> findAllSensoresAndZonaSeguridad(){
        return sensorRepository.findAllSensoresAndZonaSeguridad();
    }

    public List<Sensor> getAllSensor(){
        return sensorRepository.findAll();
    }

    public Sensor getSensorById(Long id){
        return sensorRepository.findById(id).get();
    }

    public Sensor createSensor(Sensor sensor){
        return sensorRepository.save(sensor);
    }

    public Sensor updateSensor(Long id, Sensor sensor){
        Sensor sensorDB = getSensorById(id);
        sensorDB.setTipo(sensor.getTipo());
        sensorDB.setUbicacion(sensor.getUbicacion());
        return sensorRepository.save(sensorDB);
    }

    public void deleteSensor(Long id){
        sensorRepository.deleteById(id);
    }

}
