import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

//Se encarga de interceptar las peticiones http y agregar el token a la cabecera de la peticion
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: UsuarioService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.loginService.getToken();
    if (token != null) {
      authReq = authReq.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [//Se encarga de proveer el interceptor a toda la aplicacion
  {
    provide : HTTP_INTERCEPTORS,//Se encarga de interceptar las peticiones http
    useClass : AuthInterceptor,//Clase que se va a encargar de interceptar las peticiones
    multi : true//Para que se ejecute en todas las peticiones
  }
]
