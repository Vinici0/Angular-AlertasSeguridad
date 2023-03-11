
export interface RegisterForm {
  username: string;
  nombre: string;
  email: string;
  password: string;
  password2: string;
}

export interface LoginForm {
  username: string;
  password: string;
}

export interface Token {
  token: string;
}
