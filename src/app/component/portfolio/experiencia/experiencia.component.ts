import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
selector: 'app-experiencia',
templateUrl: './experiencia.component.html',
styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

experiencia: Experiencia[] = [];
UsuarioAutenticado: boolean;
isLoading = false;
private unsubscribe$ = new Subject<void>();

constructor(private experienciaService: SExperienciaService, private router: Router) {
this.UsuarioAutenticado = false;//this.UsuarioAutenticado = true;
}

ngOnInit(): void {
this.isLoading = true;
this.experienciaService.getExperiencia()
.pipe(finalize(() => this.isLoading = false))
.subscribe(
data => {
this.experiencia = data;
},
error => {
console.error(error);
}
);
}

deleteExperiencia(id: Number) {
this.isLoading = true;
this.experienciaService.delete(Number(id))
.pipe(finalize(() => this.isLoading = false))
.subscribe(
data => {
this.experiencia = this.experiencia.filter(exp => exp.id !== id);
},
error => {
console.error(error);
}
);
}

ngOnDestroy() {
this.unsubscribe$.next();
this.unsubscribe$.complete();
}
}
//OPCION A
/*import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-experiencia',
templateUrl: './experiencia.component.html',
styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

experiencia: Experiencia[] = [];
UsuarioAutenticado: boolean;

constructor(private experienciaService: SExperienciaService, private router: Router) {
this.UsuarioAutenticado = true;
}

ngOnInit(): void {
this.experienciaService.getExperiencia().subscribe(
(data) => {
this.experiencia = data;
},
(error) => {
console.log(error);
}
);
}

deleteExperiencia(id: Number) {
  this.experienciaService.delete(Number(id)).subscribe(
  data => {
  this.experiencia = this.experiencia.filter(exp => exp.id !== id);
  },
  error => console.log(error)
  );
  }
}
*/
//OPCION B
  // Utilizar metodos para crear, actualizar, eliminar y obtener detalles de experiencias
/*save(experiencia: Experiencia){
  this.experienciaService.save(experiencia).subscribe(
  (data) => {
  console.log(data);
  },
  (error) => {
  console.log(error);
  }
  );
  }
update(id: number, experiencia: Experiencia){
  this.experienciaService.update(id, experiencia).subscribe(
  (data) => {
  console.log(data);
  },
  (error) => {
  console.log(error);
  }
  );
  }
delete(id: number){
  this.experienciaService.delete(id).subscribe(
  (data) => {
  console.log(data);
  },
  (error) => {
  console.log(error);
  }
  );
  }*/



/*
  experienceList: any[]=[];

  constructor(private datosPortfolio:PortfolioService) { }
 

  ngOnInit(): void {
    this.datosPortfolio.datosDeExperiencia().subscribe(experiencia =>{
    this.experienceList=experiencia;     
    });
}*/