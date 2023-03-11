import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ZonaAlertasComponent } from './zona-alertas/zona-alertas.component';
import { SensorComponent } from './sensor/sensor.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'alertas',
        component: AlertasComponent,
      },
      //zona-alertas, sensor, alertas
      {
        path: 'zona-seguridad',
        component: ZonaAlertasComponent,
      },
      {
        path: 'sensor',
        component: SensorComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
