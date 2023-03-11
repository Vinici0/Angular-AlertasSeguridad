import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environmen';

const baserUrl = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private http:HttpClient) { }

  public getAlertas(){
    return this.http.get(`${baserUrl}/alerta/`);
  }

  public getAlertasById(id:any){
    return this.http.get(`${baserUrl}/alerta/${id}`);
  }

  public postAlertas(img:File, data:any){
    const formData = new FormData();
    formData.append('multipartFile',img);
    console.log("data",data);

    return this.http.post(`${baserUrl}/alerta/upload?descripcion=${data.descripcionAlerta}&tipoAlerta=${data.tipoAlerta}&idSensor=${9}`,formData);
  }

  public deleteAlertas(id:any){
    return this.http.delete(`${baserUrl}/alerta/delete/${id}`);
  }



}
