import { Component, OnInit } from '@angular/core';
import { ZonaSeguridadService } from '../../services/zona-seguridad.service';
import Swal from 'sweetalert2';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-zona-alertas',
  templateUrl: './zona-alertas.component.html',
  styleUrls: ['./zona-alertas.component.scss'],
})
export class ZonaAlertasComponent implements OnInit {
  constructor(private zonaSeguridadService: ZonaSeguridadService) {}

  //una variable para almacenar los datos de getZonaSeguridad
  zonasSeguridadS: any[] = [];

  public id: any;
  public activo: boolean = true;

  public registerZonaSeguridad: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    ubicacion: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.listarZonasSeguridad();
  }

  listarZonasSeguridad() {
    this.zonaSeguridadService
      .getZonaSeguridad()
      .subscribe((zonasSeguridad: any) => {
        this.zonasSeguridadS = zonasSeguridad;
        console.log(this.zonasSeguridadS);
      });
  }

  agregarZonaSeguridad() {
    this.zonaSeguridadService
      .postZonaSeguridad(this.registerZonaSeguridad.value)
      .subscribe((resp: any) => {
        //Swal que  dice que se registro correctamente y que desaparezca en 1 segundo en la parte superior derecha pequeño
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Zona de seguridad agregada correctamente',
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(resp);
        this.listarZonasSeguridad();
        this.limpiarFormulario();
      });
  }

  deleteZonaSeguridad(id: string) {
    this.zonaSeguridadService.deleteZonaSeguridad(id).subscribe((resp: any) => {
      Swal.fire({
        position: 'bottom-start',
        icon: 'success',
        title: 'Zona de seguridad eliminada correctamente',
        showConfirmButton: false,
        timer: 1000,
        customClass: {
          popup: 'swal2-toast',
        },
      });
      console.log(resp);
      this.listarZonasSeguridad();
    });
  }

  putZonaSeguridad() {
    this.zonaSeguridadService.putZonaSeguridad(this.id,
      this.registerZonaSeguridad.value)
      .subscribe((resp: any) => {
        // Swal que  dice que se registro correctamente y que desaparezca en 1 segundo en la parte superior derecha pequeño
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Zona de seguridad actualizada correctamente',
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(resp);
        this.listarZonasSeguridad();
        this.limpiarFormulario();
      });
  }

  verZonaSeguridad(zonaSeguridad: any) {
    console.log(zonaSeguridad);
    this.id = zonaSeguridad.id;
    this.activo = false;
    this.registerZonaSeguridad.setValue({
      nombre: zonaSeguridad.nombre,
      ubicacion: zonaSeguridad.ubicacion,
    });

  }

  limpiarFormulario() {
    this.registerZonaSeguridad.reset();
  }
}

//metodo para limpiar el formulario
