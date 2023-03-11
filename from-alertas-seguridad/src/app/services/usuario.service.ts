import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environmen';
import { RegisterForm, Token } from '../interfaces/register-form.interface';

const baserUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  public loginStatusSubjec = new Subject<boolean>();

  public agregarUsuario(user:RegisterForm){
    return this.http.post(`${baserUrl}/usuarios/`,user);
  }

  public generateToken(loginData:Token){
    return this.http.post<Token>(`${baserUrl}/generate-token`,loginData);
  }

  public getCurrentUser(){
    return this.http.get(`${baserUrl}/actual-usuario`);
  }


  public loginUser(token:any){
    localStorage.setItem('token',token);
    return true;
  }

  public isLoggedIn(){//Comprobamos si el usuario esta logueado
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }

  //Obtenemos el usuario
  public setUser(user:any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  //Obtenemos el usuario
  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

}
