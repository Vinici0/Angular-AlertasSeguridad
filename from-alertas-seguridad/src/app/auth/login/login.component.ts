import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('root2', [Validators.required]),
    password: new FormControl('root2', [Validators.required]),
  });

  login() {
    console.log(this.loginForm.value);

    //comprobar el username es requerido
    if (this.loginForm.get('username')?.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'El username es requerido',
        icon: 'error',
        timer: 1000,
        showConfirmButton: false,
      });
      return;
    }

    //comprobar si el password es requerido
    if (this.loginForm.get('password')?.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'El password es requerido',
        icon: 'error',
        timer: 1000,
        showConfirmButton: false,
      });
      return;
    }

    this.usuarioService.generateToken(this.loginForm.value).subscribe(
      ({ token }) => {
        //Swal que  dice que se registro correctamente y que desaparezca en 2 segundos
        console.log(token);
        this.usuarioService.loginUser(token);
        this.usuarioService.getCurrentUser().subscribe((user: any) => {
          console.log('user: ', user);
          this.usuarioService.setUser(user);
          if (user.authorities[0].authority === 'ADMIN') {
            this.router.navigateByUrl('/pages/dashboard');
            //Se emite el valor true para que el navbar sepa que el usuario esta logueado
            this.usuarioService.loginStatusSubjec.next(true);
          } else if (user.authorities[0].authority === 'NORMAL') {
            this.router.navigateByUrl('/pages/dashboard');
            //Se emite el valor true para que el navbar sepa que el usuario esta logueado
            this.usuarioService.loginStatusSubjec.next(true);
          } else {
            this.router.navigateByUrl('/login');
            this.usuarioService.loginStatusSubjec.next(false);
          }
        });
      },
      (err) => {
        Swal.fire({
          title: 'Error',
          text: err.error.msg,
          icon: 'error',
          timer: 1000,
          showConfirmButton: false,
        });

        this.usuarioService.loginStatusSubjec.next(false);
      }
    );
  }
}
