import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User
  confirmarSenhas: string
  tipoUsers: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

  }

  confirmarSenha(event: any) {
    this.confirmarSenhas = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsers = event.target.value
  }

  cadastrar() {
    this.user.tipoUsuario = this.tipoUsers

    if(this.user.senha != this.confirmarSenhas) {
      this.alertas.showAlertDanger('As senhas não são idênticas')
    }
    else {
      this.authService.signup(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    }
  }
}