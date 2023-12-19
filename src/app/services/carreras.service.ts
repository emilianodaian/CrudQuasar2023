import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  private apiUrl = 'https://institutequasar.com/edumanager/APIprueba/carreras.php';

  constructor(private http: HttpClient) { }

  // Método para obtener todas las carreras
  getCarreras(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  //Método para obtener carrera por ID
  getCarreraById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?id=${id}`);
  }

  //Método para obtener carrera por Nombre
  getCarreraByNombre(nombre: any): Observable<any> {
    return this.http.get(`${this.apiUrl}?nombre=${nombre}`);
  }

  //Método para eliminar una carrera por ID
  deleteCarreras(id:any): Observable<any>{
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }

  //Método para actualizar una carrera
  updateCarrera(id:number,nuevoNombre:string): Observable<any> {
    return this.http.put(`${this.apiUrl}`,{idCarreras:id,carNombre:nuevoNombre});
  }

  //Método para insertar una Carrera
  insertCarrera(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`,data);
  }
}