package com.sistema.examenes.modelo;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "alerta")
public class Alerta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descripcionAlerta;

    private LocalDate fechaAlerta;
    private String imagenId;
    private String imagenUrl;

    private String tipoAlerta;

    private String TipoDeAtecion;
    @Column(name = "sensor_id")
    private Long sensorId;

    public Alerta() {
    }

    public Alerta(String descripcionAlerta, String imagenId, String imagenUrl, String tipoAlerta, Long sensorId) {
        this.descripcionAlerta = descripcionAlerta;
        this.fechaAlerta =  LocalDate.now();
        this.imagenId = imagenId;
        this.imagenUrl = imagenUrl;
        this.tipoAlerta = tipoAlerta;
        this.sensorId = sensorId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcionAlerta() {
        return descripcionAlerta;
    }

    public void setDescripcionAlerta(String descripcionAlerta) {
        this.descripcionAlerta = descripcionAlerta;
    }

    public LocalDate getFechaAlerta() {
        return fechaAlerta;
    }

    public void setFechaAlerta(LocalDate fechaAlerta) {
        this.fechaAlerta = fechaAlerta;
    }

    public Long getSensorId() {
        return sensorId;
    }

    public void setSensorId(Long sensorId) {
        this.sensorId = sensorId;
    }

    public String getImagenId() {
        return imagenId;
    }

    public void setImagenId(String imagenId) {
        this.imagenId = imagenId;
    }

    public String getImagenUrl() {
        return imagenUrl;
    }

    public void setImagenUrl(String imagenUrl) {
        this.imagenUrl = imagenUrl;
    }

    public String getTipoAlerta() {
        return tipoAlerta;
    }

    public void setTipoAlerta(String tipoAlerta) {
        this.tipoAlerta = tipoAlerta;
    }

    public String getTipoDeAtecion() {
        return TipoDeAtecion;
    }

    public void setTipoDeAtecion(String tipoDeAtecion) {
        TipoDeAtecion = tipoDeAtecion;
    }
}
