import { Component } from '@angular/core';
import { CargarArchivoService } from '../../cargar-archivo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    private _cargarArchivoService: CargarArchivoService,

    ) {
    _cargarArchivoService.cargarArchivo(["script"]);
  }

  usuario:any = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: '',
  }

  logout() {
    console.log('logout');
  }

}
