package com.sistema.examenes.repositorios;

import com.sistema.examenes.modelo.ZonaSeguridad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZonaSeguridadRepository extends JpaRepository<ZonaSeguridad, Long> {

}
