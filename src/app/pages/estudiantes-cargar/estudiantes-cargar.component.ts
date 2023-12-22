import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiantes-cargar',
  templateUrl: './estudiantes-cargar.component.html',
  styleUrls: ['./estudiantes-cargar.component.css']
})
export class EstudiantesCargarComponent {

  apellido: string='';
  nombre: string='';
  dni: string='';
  email: string='';
  telefono: string='';

  submitForm() {
    // Aquí puedes manejar la lógica para enviar los datos, por ejemplo:
    console.log('Apellidos:', this.apellido);
    console.log('Nombres:', this.nombre);
    console.log('DNI:', this.dni);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);

  
  }
}
