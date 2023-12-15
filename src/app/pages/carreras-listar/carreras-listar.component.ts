import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CarrerasService } from 'src/app/services/carreras.service';

@Component({
  selector: 'app-carreras-listar',
  templateUrl: './carreras-listar.component.html',
  styleUrls: ['./carreras-listar.component.css']
})
export class CarrerasListarComponent implements OnInit{

  carreras:any[]=[];

  ngOnInit(): void {
    this.cargarTabla();
  }

  constructor( 
    private router:Router,
    private carrerasService: CarrerasService ){}

cargarTabla(){
  this.carrerasService.getCarreras().subscribe(
    data => {
      this.carreras = data;
    },
    (error)=> {
      console.error('Error al cargar los datos',error);
    }
  )
}

eliminarCarrera(carrera:any):void{
  if(confirm("¿Está seguro que desea eliminar la carrera "+carrera.carNombre+"?")){
    this.carrerasService.deleteCarreras(carrera.idCarreras).subscribe(
      (data) => {
        this.cargarTabla();
      },
      (error) => {
        console.error('Error al eliminar la carrera', error);
      }
    )
  }
}


}
