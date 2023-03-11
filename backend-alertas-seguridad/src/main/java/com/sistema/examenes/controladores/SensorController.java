package com.sistema.examenes.controladores;

import com.sistema.examenes.modelo.Sensor;
import com.sistema.examenes.servicios.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/sensor")
@CrossOrigin(origins = "http://localhost:4200")
public class SensorController {

    @Autowired
    private SensorService sensorService;

    //save, update, delete, get, getAll
    @GetMapping("/")
    public List<Object[]> getAllSensor(){
        return sensorService.findAllSensoresAndZonaSeguridad();
    }


    @GetMapping("/{id}")
    public Sensor getSensorById(@PathVariable Long id){
        return sensorService.getSensorById(id);
    }

    @PostMapping("/")
    public Sensor createSensor(@RequestBody Sensor sensor){
        return sensorService.createSensor(sensor);
    }

    @PutMapping("/{id}")
    public Sensor updateSensor(@PathVariable Long id, @RequestBody Sensor sensor){
        return sensorService.updateSensor(id, sensor);
    }

    @DeleteMapping("/{id}")
    public void deleteSensor(@PathVariable Long id){
        sensorService.deleteSensor(id);
    }


}
