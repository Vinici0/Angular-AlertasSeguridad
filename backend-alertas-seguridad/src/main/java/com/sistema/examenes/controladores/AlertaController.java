package com.sistema.examenes.controladores;

import com.sistema.examenes.dto.Mensaje;
import com.sistema.examenes.modelo.Alerta;
import com.sistema.examenes.servicios.AlertaService;
import com.sistema.examenes.servicios.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/alerta")
@CrossOrigin(origins = "http://localhost:4200")
public class AlertaController {

    @Autowired
    private AlertaService alertaService;
    @Autowired
    CloudinaryService cloudinaryService;

    @GetMapping("/")
    public List<Object[]> getAllAlerta() {
        return alertaService.getAllAlerta();
    }

    @GetMapping("/{id}")
    public Alerta getAlertaById(@PathVariable Long id) {
        return alertaService.getAlertaById(id);
    }

    @PostMapping("/")
    public Alerta createAlerta(@RequestBody Alerta alerta) {
        return alertaService.createAlerta(alerta);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam MultipartFile multipartFile,
            @RequestParam String descripcion, @RequestParam String tipoAlerta,
                                    @RequestParam Long idSensor)
            throws IOException {

        System.out.println( "descripcion: " + descripcion + " tipoAlerta: " + tipoAlerta + " id: " + idSensor);
        BufferedImage bi = ImageIO.read(multipartFile.getInputStream());
        if (bi == null) {
            return new ResponseEntity(new Mensaje("imagen no válida"), HttpStatus.BAD_REQUEST);
        }
        Map result = cloudinaryService.upload(multipartFile);
        Alerta imagen = new Alerta(descripcion, (String) result.get("public_id"),
                (String) result.get("url"),
                tipoAlerta,idSensor);
        alertaService.createAlerta(imagen);
        return new ResponseEntity(new Mensaje("imagen subida"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id)throws IOException {
        if(!alertaService.existsAlerta(id))
            return new ResponseEntity(new Mensaje("no existe"), HttpStatus.NOT_FOUND);

        Alerta alerta = alertaService.getOneAlerta(id).get();
        Map result = cloudinaryService.delete(alerta.getImagenId());
        alertaService.deleteAlerta(id);
        return new ResponseEntity(new Mensaje("eliminado"), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public Alerta updateAlerta(@PathVariable Long id, @RequestBody Alerta alerta) {
        return alertaService.updateAlerta(id, alerta);
    }

    @DeleteMapping("/{id}")
    public void deleteAlerta(@PathVariable Long id) {
        alertaService.deleteAlerta(id);
    }
}
