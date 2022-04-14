import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { ErrorComponent } from './pages/error/error.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { TatetiComponent } from './pages/tateti/tateti.component';
import { MemotestComponent } from './pages/memotest/memotest.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig= {
  apiKey: "AIzaSyAKeo6ffO69qqQ-41iRoqaaHXPrVXZ6Jks",
  authDomain: "tp-salajuegos.firebaseapp.com",
  projectId: "tp-salajuegos",
  storageBucket: "tp-salajuegos.appspot.com",
  messagingSenderId: "658238771075",
  appId: "1:658238771075:web:c6f5552dc0f869bcb6f0b6",
  measurementId: "G-ESTWFX1FR6"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BienvenidoComponent,
    ErrorComponent,
    JuegosComponent,
    TatetiComponent,
    MemotestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
