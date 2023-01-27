import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  experienciaForm: FormGroup;

  constructor(private sExperiencia: SExperienciaService, private router: Router) {
    this.experienciaForm = new FormGroup({
      logoEx: new FormControl(''),
      urlEx: new FormControl(''),
      empresaEx: new FormControl(''),
      descripcionEx: new FormControl(''),
      lugarEx: new FormControl(''),
      cargoEx: new FormControl(''),
      desdeEx: new FormControl(''),
      hastaEx: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.experienciaForm = new FormGroup({
      logoEx: new FormControl(''),
      urlEx: new FormControl(''),
      empresaEx: new FormControl(''),
      descripcionEx: new FormControl(''),
      lugarEx: new FormControl(''),
      cargoEx: new FormControl(''),
      desdeEx: new FormControl(''),
      hastaEx: new FormControl('')
    });
  }

  onCreate(): void {
    const experiencia = new Experiencia(
      this.experienciaForm.value.logoEx,
      this.experienciaForm.value.urlEx,
      this.experienciaForm.value.empresaEx,
      this.experienciaForm.value.descripcionEx,
      this.experienciaForm.value.lugarEx,
      this.experienciaForm.value.cargoEx,
      this.experienciaForm.value.desdeEx,
      this.experienciaForm.value.hastaEx
    );
    this.sExperiencia.save(experiencia).subscribe(
      data => {
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      err => {
        alert('Fallo');
        this.router.navigate(['']);
      }
      );
      }
      
      }