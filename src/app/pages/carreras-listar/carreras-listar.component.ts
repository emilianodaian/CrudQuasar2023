import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CarrerasService } from 'src/app/services/carreras.service';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-carreras-listar',
  templateUrl: './carreras-listar.component.html',
  styleUrls: ['./carreras-listar.component.css']
})
export class CarrerasListarComponent implements OnInit{

  buscarCarrera:string='';
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

searchCarreras():void{
  if(this.buscarCarrera){
    this.carrerasService.getCarreraByNombre(this.buscarCarrera).subscribe(
      (data) => {
        this.carreras = data;
      },
      (error) => {
        console.error('Error al obtener la carrera', error);
      }
    );
  }else{
    this.cargarTabla();
  }
}


@ViewChild('tabla', {static:true}) tabla!:ElementRef;
generarPDF(){
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit:'mm',
    format: [297,210]
  });

  const tabla=this.tabla.nativeElement;

  pdf.html(
    tabla,{
      callback:(pdf)=>{
        pdf.save('listadoCarreras.pdf');
      },
      x:5,
      y:5,
      html2canvas:{
        scale:0.3
      }
    }
  );



}

}
