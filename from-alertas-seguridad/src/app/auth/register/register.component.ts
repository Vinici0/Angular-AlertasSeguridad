import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public formSubmitted = false;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  public registerLogin: FormGroup = new FormGroup({
    username: new FormControl('root2', [Validators.required]),
    nombre: new FormControl('root2', [Validators.required]),
    email: new FormControl('root2@gmail.com', [Validators.required, Validators.email]),

    password: new FormControl('root2', [
      Validators.required,
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
    ]),
    password2: new FormControl('root2', [Validators.required]),
  });

  register() {
    this.usuarioService.agregarUsuario(this.registerLogin.value).subscribe(
      (resp) => {
        //Swal que  dice que se registro correctamente y que desaparezca en 2 segundos
        Swal.fire({
          title: 'Usuario registrado correctamente',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
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
      }
    );
  }
}
