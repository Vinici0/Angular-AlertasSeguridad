package com.sistema.examenes.modelo;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "sensor")
public class Sensor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo;

    private String ubicacion;

    // ZonaSeguridad
    @Column(name = "zona_seguridad_id")
    private Long zonaSeguridadId;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "sensor_id", referencedColumnName = "id")
    Set<Alerta> alerta = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public Long getZonaSeguridadId() {
        return zonaSeguridadId;
    }

    public void setZonaSeguridadId(Long zonaSeguridadId) {
        this.zonaSeguridadId = zonaSeguridadId;
    }

    public Set<Alerta> getAlerta() {
        return alerta;
    }

    public void setAlerta(Set<Alerta> alerta) {
        this.alerta = alerta;
    }
}
