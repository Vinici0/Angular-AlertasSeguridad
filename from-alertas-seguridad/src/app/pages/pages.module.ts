import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertasComponent } from './alertas/alertas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { ZonaAlertasComponent } from './zona-alertas/zona-alertas.component';
import { SensorComponent } from './sensor/sensor.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlertasComponent,
    DashboardComponent,
    PagesComponent,
    ZonaAlertasComponent,
    SensorComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertasComponent,
    DashboardComponent,
    PagesComponent
  ]
})
export class PagesModule { }
