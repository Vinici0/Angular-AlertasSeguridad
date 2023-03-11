import { Injectable } from '@angular/core';
import { environment } from '../../environments/environmen';
import { HttpClient } from '@angular/common/http';

const baserUrl = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ZonaSeguridadService {

  constructor(private http:HttpClient) { }

  public getZonaSeguridad(){
    return this.http.get(`${baserUrl}/zonaSeguridad/`);
  }

  public getZonaSeguridadById(id:any){
    return this.http.get(`${baserUrl}/zonaSeguridad/${id}`);
  }

  public postZonaSeguridad(zonaSeguridad:any){
    return this.http.post(`${baserUrl}/zonaSeguridad/`,zonaSeguridad);
  }

  public deleteZonaSeguridad(id:any){
    return this.http.delete(`${baserUrl}/zonaSeguridad/${id}`);
  }

  public putZonaSeguridad(id:any,zonaSeguridad:any){
    console.log("-------------id",id,"zonaSeguridad",zonaSeguridad);
    delete zonaSeguridad.id;
    return this.http.put(`${baserUrl}/zonaSeguridad/${id}`,zonaSeguridad);
  }





}
