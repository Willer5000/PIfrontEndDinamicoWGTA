import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../../../servicios/portfolio.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  coursesList: any[]=[];
  constructor(private datosPortfolio:PortfolioService) { }
 
  ngOnInit(): void {
    this.datosPortfolio.datosDeCursos().subscribe(cursos =>{
    this.coursesList=cursos;     
    });
  }
}
  