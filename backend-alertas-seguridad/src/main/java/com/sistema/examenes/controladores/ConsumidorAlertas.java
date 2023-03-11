package com.sistema.examenes.controladores;

import com.sistema.examenes.dto.Mensaje;
import com.sistema.examenes.modelo.Alerta;
import com.sistema.examenes.servicios.AlertaService;
import com.sistema.examenes.servicios.CloudinaryService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;


import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;

import java.util.Map;

//@Component
public class ConsumidorAlertas {
//    @Autowired
//    private AlertaService alertaService;
//    @Autowired
//    CloudinaryService cloudinaryService;
//    //1 = grave
    //2 = medio
    //3 = leve
//    @RabbitListener(queues = "1")
//    public void receiveGrave(@RequestParam MultipartFile multipartFile,
//                             @RequestParam String descripcion, @RequestParam String tipoAlerta,
//                             @RequestParam Long idSensor) throws IOException {
//
//            System.out.println( "descripcion: " + descripcion + " tipoAlerta: " + tipoAlerta + " id: " + idSensor);
//            BufferedImage bi = ImageIO.read(multipartFile.getInputStream());
//            if (bi == null) {
//                return new ResponseEntity(new Mensaje("imagen no válida"), HttpStatus.BAD_REQUEST);
//            }
//
//            Map result = cloudinaryService.upload(multipartFile);
//            Alerta imagen = new Alerta(descripcion, (String) result.get("public_id"),
//                    (String) result.get("url"),
//                    tipoAlerta,idSensor);
//            alertaService.createAlerta(imagen);
//    }


}
