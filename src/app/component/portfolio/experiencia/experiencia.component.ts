import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  experienceList: any[]=[];


  constructor(private datosPortfolio:PortfolioService) { }
 

  ngOnInit(): void {
    this.datosPortfolio.datosDeExperiencia().subscribe(experiencia =>{
    this.experienceList=experiencia;     
    });
  };
}