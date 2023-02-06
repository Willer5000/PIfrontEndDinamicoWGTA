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
      logoex: new FormControl(''),
      urlex: new FormControl(''),
      empresaex: new FormControl(''),
      descripcionex: new FormControl(''),
      lugarex: new FormControl(''),
      cargoex: new FormControl(''),
      desdeex: new FormControl(''),
      hastaEx: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.experienciaForm = new FormGroup({
      logoex: new FormControl(''),
      urlex: new FormControl(''),
      empresaex: new FormControl(''),
      descripcionex: new FormControl(''),
      lugarex: new FormControl(''),
      cargoex: new FormControl(''),
      desdeex: new FormControl(''),
      hastaex: new FormControl('')
    });
  }

  onCreate(): void {
    const experiencia = new Experiencia(
      this.experienciaForm.value.logoex,
      this.experienciaForm.value.urlex,
      this.experienciaForm.value.empresaex,
      this.experienciaForm.value.descripcionex,
      this.experienciaForm.value.lugarex,
      this.experienciaForm.value.cargoex,
      this.experienciaForm.value.desdeex,
      this.experienciaForm.value.hastaex
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