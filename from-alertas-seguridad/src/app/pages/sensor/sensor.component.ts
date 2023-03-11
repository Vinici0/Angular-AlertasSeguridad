import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ZonaSeguridadService } from '../../services/zona-seguridad.service';
import { SensorService } from '../../services/sensor.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {


  public activo: boolean = true;

  public id: any;
  public zonasSeguridadS: any[] = [];

  public sensores: any[] = [];

  public registerSensor: FormGroup = new FormGroup({
    tipo: new FormControl('', [Validators.required]),
    ubicacion : new FormControl('', [Validators.required]),
    zonaSeguridadId: new FormControl('', [Validators.required]),
  });

  constructor(
    private zonaSeguridadService: ZonaSeguridadService,
    private sensorService: SensorService
    ) {}


  ngOnInit(): void {
    this.listarZonasSeguridad();
    this.listarSensores();
  }

  listarZonasSeguridad() {
    this.zonaSeguridadService
      .getZonaSeguridad()
      .subscribe((zonasSeguridad: any) => {
        this.zonasSeguridadS = zonasSeguridad;
        // console.log(this.zonasSeguridadS);
      });
  }


  listarSensores() {
    this.sensorService
      .getSensor()
      .subscribe((sensores: any) => {
        this.sensores = sensores;
        console.log(this.sensores);
      });
  }

  agregarSensor() {
    this.sensorService
      .postSensor(this.registerSensor.value)
      .subscribe((resp: any) => {
        //Swal que  dice que se registro correctamente y que desaparezca en 1 segundo en la parte superior derecha pequeño
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sensor agregado correctamente',
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(resp);
        this.listarSensores();
        this.limpiarFormulario();
      });
  }

  putSensor() {
    this.sensorService
      .putSensor(this.id, this.registerSensor.value)
      .subscribe((resp: any) => {
        //Swal que  dice que se registro correctamente y que desaparezca en 1 segundo en la parte superior derecha pequeño
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sensor modificado correctamente',
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(resp);
        this.listarSensores();
        this.limpiarFormulario();
      },
      (error) => {
        //Swal que  dice que se registro correctamente y que desaparezca en 1 segundo en la parte superior derecha pequeño
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error al modificar el sensor',
          showConfirmButton: false,
          timer: 1000,
        });
      }
      );
  }

  verSonsor(verSensor: any) {
    this.id = verSensor[0].id;
    this.activo = false;
    this.registerSensor.setValue({
      tipo: verSensor[0].tipo,
      ubicacion: verSensor[0].ubicacion,
      zonaSeguridadId: verSensor[1],
    });
  }

  deleteSensor(id : any) {
    this.sensorService
      .deleteSensor(id)
      .subscribe((resp: any) => {
        //Swal que  dice que se registro correctamente y que desaparezca en 1 segundo en la parte superior derecha pequeño
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Sensor eliminado correctamente',
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(resp);
        this.listarSensores();
        this.limpiarFormulario();
      },
      (error) => {
        //Swal que  dice que se registro correctamente y que desaparezca en 1 segundo en la parte superior derecha pequeño
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error al eliminar el sensor',
          showConfirmButton: false,
          timer: 1000,
        });
      }
      );
  }

  limpiarFormulario() {
    this.registerSensor.reset();
  }

}
