package com.sistema.examenes.repositorios;

import com.sistema.examenes.modelo.Alerta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlertaSegurityRepository extends JpaRepository<Alerta, Long> {

    List<Alerta> findByOrderById();

    @Query("SELECT s, z.tipo AS tipoSensor FROM Alerta s JOIN Sensor z ON s.sensorId = z.id")
    List<Object[]> findAllAlertaAndSensor();

}
