import { Component, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName: string;

  constructor(private rota: Router) {}

  login() {
    if (this.userName === undefined) {
      alert("Digite um nome")
    } else {
      sessionStorage.setItem('user', this.userName);
      this.rota.navigate(['home'])
    }
  }
}
