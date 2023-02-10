//OPCION A1
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { Router } from '@angular/router';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit, OnDestroy {

  experiencia: Experiencia[] = [];
  isLoading = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private experienciaService: SExperienciaService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.authService.currentUserSubject.subscribe(user => {
      if (user) {
        this.experienciaService.getExperiencia()
        .pipe(
          finalize(() => this.isLoading = false),
          takeUntil(this.unsubscribe$)
        )
        .subscribe(experiencia => this.experiencia = experiencia);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  deleteExperiencia(id: number): void {
    this.experienciaService.delete(id).subscribe(() => {
      this.experiencia = this.experiencia.filter(e => e.id !== id);
    });
  }

  get UsuarioAutenticado(): boolean {
    return this.authService.isAuthenticated();
  }
}


//OPCION A
/*
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { Router } from '@angular/router';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
selector: 'app-experiencia',
templateUrl: './experiencia.component.html',
styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit, OnDestroy {

experiencia: Experiencia[] = [];
UsuarioAutenticado = false;
isLoading = false;
private unsubscribe$ = new Subject<void>();

constructor(private experienciaService: SExperienciaService, private router: Router, private authService: AuthService) { }

ngOnInit(): void {
this.isLoading = true;
this.experienciaService.getExperiencia()
.pipe(
finalize(() => this.isLoading = false),
takeUntil(this.unsubscribe$)
)
.subscribe(
data => {
this.experiencia = data;
},
error => {
console.error(error);
}
);
this.UsuarioAutenticado = this.authService.isAuthenticated();
}

deleteExperiencia(id: number) {
if (this.UsuarioAutenticado) {
  this.isLoading = true;
  this.experienciaService.delete(id)
  .pipe(
    finalize(() => this.isLoading = false),
    takeUntil(this.unsubscribe$)
  )
  .subscribe(
    () => {
      this.experiencia = this.experiencia.filter(exp => exp.id !== id);
    },
    error => {
      console.error(error);
    }
  );
}
}

ngOnDestroy() {
this.unsubscribe$.next();
this.unsubscribe$.complete();
}
}
*/
//OPCION B
/*import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { Router } from '@angular/router';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
selector: 'app-experiencia',
templateUrl: './experiencia.component.html',
styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit, OnDestroy {

experiencia: Experiencia[] = [];
UsuarioAutenticado = false;
isLoading = false;
private unsubscribe$ = new Subject<void>();

constructor(private experienciaService: SExperienciaService, private router: Router, private authService: AuthService) { }

ngOnInit(): void {
this.isLoading = true;
this.experienciaService.getExperiencia()
.pipe(
finalize(() => this.isLoading = false),
takeUntil(this.unsubscribe$)
)
.subscribe(
data => {
this.experiencia = data;
},
error => {
console.error(error);
}
);
this.UsuarioAutenticado = this.authService.isAuthenticated();
}

deleteExperiencia(id: number) {
this.isLoading = true;
this.experienciaService.delete(id)
.pipe(
finalize(() => this.isLoading = false),
takeUntil(this.unsubscribe$)
)
.subscribe(
() => {
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
}*/
//OPCION C
/*
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { Router } from '@angular/router';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit, OnDestroy {

  experiencia: Experiencia[] = [];
  UsuarioAutenticado = true;
  isLoading = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private experienciaService: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.experienciaService.getExperiencia()
      .pipe(
        finalize(() => this.isLoading = false),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(
        data => {
          this.experiencia = data;
        },
        error => {
          console.error(error);
        }
      );
  }

  deleteExperiencia(id: number) {
    this.isLoading = true;
    this.experienciaService.delete(id)
      .pipe(
        finalize(() => this.isLoading = false),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(
        () => {
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
*/
/*
//OPCION D
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
this.UsuarioAutenticado = true;
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
*/
//OPCION E
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
