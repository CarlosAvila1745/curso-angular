import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <form (ngSubmit)="login()">
      <input [(ngModel)]="username" name="username" placeholder="Usuario" required />
      <input [(ngModel)]="password" name="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
    </form>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/tasks']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
