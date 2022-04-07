import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { ErrorComponent } from './pages/error/error.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { LoginComponent } from './pages/login/login.component';
import { MemotestComponent } from './pages/memotest/memotest.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { TatetiComponent } from './pages/tateti/tateti.component';


const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"registro",component:RegistroComponent},
  {path:"home",component:BienvenidoComponent},
  {path:"juegos",component:JuegosComponent,children:[
    {path:"tateti",component:TatetiComponent},
    {path:"memotest",component:MemotestComponent},
  ]},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
