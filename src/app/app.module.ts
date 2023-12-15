import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarrerasListarComponent } from './pages/carreras-listar/carreras-listar.component';
import { CarrerasEditarComponent } from './pages/carreras-editar/carreras-editar.component';
import { CarrerasCargarComponent } from './pages/carreras-cargar/carreras-cargar.component';
import { CarrerasService } from './services/carreras.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    ContactoComponent,
    CarrerasListarComponent,
    CarrerasEditarComponent,
    CarrerasCargarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [
    CarrerasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
