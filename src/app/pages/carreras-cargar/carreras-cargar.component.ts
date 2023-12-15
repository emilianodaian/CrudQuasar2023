import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { CarrerasService } from 'src/app/services/carreras.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carreras-cargar',
  templateUrl: './carreras-cargar.component.html',
  styleUrls: ['./carreras-cargar.component.css']
})
export class CarrerasCargarComponent implements OnInit {
  carrera={
    carNombre:'',
  }

  constructor(
    private router : Router,
    private carrerasService:CarrerasService
  ){

  }

  crearCarrera(){
    this.carrerasService.insertCarrera(this.carrera)
    .subscribe
    (
      (data) => {
        console.log("Se ha añadido la carrera correctamente");
        this.router.navigateByUrl('/listarcarreras');
      },
      (error)=>{
        alert('Error al insertar');
      }
    );
  }

  ngOnInit(): void {
    
  }
}
