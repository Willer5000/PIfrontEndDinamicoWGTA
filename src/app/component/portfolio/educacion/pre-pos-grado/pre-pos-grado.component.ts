import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../../../servicios/portfolio.service';


@Component({
  selector: 'app-pre-pos-grado',
  templateUrl: './pre-pos-grado.component.html',
  styleUrls: ['./pre-pos-grado.component.css']
})
export class PrePosGradoComponent implements OnInit {

  gradesList: any[]=[];
  constructor(private datosPortfolio:PortfolioService) { }
 
  ngOnInit(): void {
    this.datosPortfolio.datosDeEducacion().subscribe(educacion =>{
    this.gradesList=educacion;     
    });
  }
}