import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    email:'',
    password:''
  }

 Ingresar(){
  this.auth.login(this.usuario.email,this.usuario.password).then(res => {
    console.log("ingreso: ",res);
  }).catch(err => {
    alert("Credenciles invalidas");
  })
 }

 ObtenerUsuarioLogueado(){
  this.auth.getUserLogged();
}

Salir()
{
  this.auth.logOut();
}

  constructor(private auth: AuthService) {

   }

  ngOnInit(): void {
  }

}
