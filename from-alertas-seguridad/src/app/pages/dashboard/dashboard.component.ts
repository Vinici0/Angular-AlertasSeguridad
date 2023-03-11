import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public num: number = 450;
   // Doughnut
   public doughnutChartLabels: string[] = [ 'Grave', 'Medio', 'Leve' ];
   public doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
       { data: [ 350, 450, this.num ],
         backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ] },

     ]
   };
   public doughnutChartType: ChartType = 'doughnut';

   // events
   public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }

   public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }

}
