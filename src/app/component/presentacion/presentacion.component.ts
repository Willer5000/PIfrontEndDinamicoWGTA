import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './../../servicios/portfolio.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  miPresentation:any;
  miOcupation: any;


  constructor(private datosPortfolio:PortfolioService) {}

      ngOnInit(): void {
        this.datosPortfolio.obtenerDatos().subscribe(data=>{
             console.log(data);
    
        this.miPresentation=data;     
        });
        this.datosPortfolio.obtenerDatos().subscribe(data2=>{
          this.miOcupation=data2.ocupation;
        });
      }
    
    }