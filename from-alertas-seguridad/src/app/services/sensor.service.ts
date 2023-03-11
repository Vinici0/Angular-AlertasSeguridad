import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environmen';

const baserUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http:HttpClient) { }

  public getSensor(){
    return this.http.get(`${baserUrl}/sensor/`);
  }

  public getSensorById(id:any){
    return this.http.get(`${baserUrl}/sensor/${id}`);
  }

  public postSensor(sensor:any){
    return this.http.post(`${baserUrl}/sensor/`,sensor);
  }

  public deleteSensor(id:any){
    return this.http.delete(`${baserUrl}/sensor/${id}`);
  }

  public putSensor(id:any,sensor:any){
    console.log("-------------id",id,"sensor",sensor);
    delete sensor.id;
    return this.http.put(`${baserUrl}/sensor/${id}`,sensor);
  }

}
