import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../../servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  projectsList: any[]=[];


  constructor(private datosPortfolio:PortfolioService) { }
 

  ngOnInit(): void {
    this.datosPortfolio.datosDeProyectos().subscribe(proyectos =>{
    this.projectsList=proyectos;     
    });
  };
}