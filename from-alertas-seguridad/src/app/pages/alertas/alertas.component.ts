import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { AlertasService } from '../../services/alertas.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss'],
})
export class AlertasComponent implements OnInit {
  public activo: boolean = true;
  public registerAlertas: FormGroup = new FormGroup({
    descripcionAlerta: new FormControl('', [Validators.required]),
    tipoAlerta: new FormControl('', [Validators.required]),
    idSensor: new FormControl('', [Validators.required]),
  });

  public imagenes: any[] = [];
  public imagenSubir: File;
  public imgTemp: any = '';

  constructor(
    private alertasService: AlertasService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.listarAlertas();
  }

  listarAlertas() {
    this.alertasService.getAlertas().subscribe((alertas: any) => {
      this.imagenes = alertas;
      console.log(this.imagenes);
    });
  }

  agregarAlertas() {
    // this.spinner.show();
    this.alertasService
      .postAlertas(this.imagenSubir, this.registerAlertas.value)
      .subscribe((resp: any) => {
        console.log(resp);
        this.spinner.hide();
        Swal.fire('Alerta', 'Alerta creada con exito', 'success');
      });
      this.listarAlertas();
  }

  putAlertas() {
    console.log('Editar Alertas');
  }

  verSonsor() {
    console.log('Ver Alertas');
  }

  deleteAlertas() {
    console.log('Eliminar Alertas');
  }

  borrar(id: any) {
    console.log('Borrar');
  }

  cambiarImagen(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.imagenSubir = files[0];
    if (!files) {
      return (this.imgTemp = '');
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imgTemp = reader.result as string;
    };
    console.log(this.imagenSubir);
    return this.imagenSubir;
  }

  eliminarAlerta(id: any) {
    this.alertasService.deleteAlertas(id).subscribe((resp: any) => {
      console.log(resp);
      Swal.fire('Alerta', 'Alerta eliminada con exito', 'success');
      this.listarAlertas();
    });
  }
}
