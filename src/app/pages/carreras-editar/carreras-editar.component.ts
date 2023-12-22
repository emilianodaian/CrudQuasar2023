import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CarrerasService } from 'src/app/services/carreras.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carreras-editar',
  templateUrl: './carreras-editar.component.html',
  styleUrls: ['./carreras-editar.component.css']
})
export class CarrerasEditarComponent implements OnInit {

elID:any;
formCarreras: FormGroup;

constructor(
  public formulario:FormBuilder,
  private rutaactiva:ActivatedRoute,
  private carrerasService:CarrerasService,
  private router:Router,
  private http:HttpClient,
){
  this.formCarreras=this.formulario.group({
    carNombre:[''],
  });
}

ngOnInit(): void {
  this.elID=this.rutaactiva.snapshot.paramMap.get('id');
  this.formCarreras = this.formulario.group({
    carNombre: [''],
  });

  this.carrerasService.getCarreraById(this.elID).subscribe((respuesta) => {
    if (respuesta && respuesta[0]) {
      this.formCarreras.patchValue({
        carNombre: respuesta[0]['carNombre'],
      });
    }
  });
}

  actualizarCarrera():void{
    const idCarrera = this.elID;
    const nuevoNombre=this.formCarreras.get('carNombre')?.value;

    this.carrerasService.updateCarrera(idCarrera,nuevoNombre)
    .subscribe(
      respuesta => {
        console.log('Modificación Correcta',respuesta);
        this.router.navigateByUrl('/listarcarreras');
      },
      error=>{
        console.error('Error',error);
      }
    );
  }

}
