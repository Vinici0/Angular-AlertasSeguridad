package com.sistema.examenes.repositorios;

import com.sistema.examenes.modelo.Sensor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SensorRepository extends JpaRepository<Sensor, Long> {

    //trar todos los sensores y el nombre de la zona de seguridad
    @Query("SELECT s, z.nombre AS nombreZonaSeguridad FROM Sensor s JOIN ZonaSeguridad z ON s.zonaSeguridadId = z.id")
    List<Object[]> findAllSensoresAndZonaSeguridad();

}
