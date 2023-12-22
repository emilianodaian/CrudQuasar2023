import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarrerasListarComponent } from './pages/carreras-listar/carreras-listar.component';
import { CarrerasEditarComponent } from './pages/carreras-editar/carreras-editar.component';
import { CarrerasCargarComponent } from './pages/carreras-cargar/carreras-cargar.component';
import { EstudiantesCargarComponent } from './pages/estudiantes-cargar/estudiantes-cargar.component';


const routes: Routes = [

  {path:'listarcarreras',component:CarrerasListarComponent},
  {path:'insertarcarreras',component:CarrerasCargarComponent},
  {path:'editarcarreras/:id',component:CarrerasEditarComponent},
  {path:'contacto',component:ContactoComponent},  
  {path:'cargarestudiantes',component:EstudiantesCargarComponent},
  {path:'',component:PrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
