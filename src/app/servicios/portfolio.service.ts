import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

 
  datosDeEducacion():Observable<any>{
    return this.http.get('./assets/data/educacion.json');
  }
  datosDeCursos():Observable<any>{
    return this.http.get('./assets/data/cursos.json');
  }

 
  datosDeHabilidades():Observable<any>{
    return this.http.get('./assets/data/habilidades.json');
  }
  datosDeProyectos():Observable<any>{
    return this.http.get('./assets/data/proyectos.json');
  }
  datosDeFooter():Observable<any>{
    return this.http.get('./assets/data/data.json');
  }
}
