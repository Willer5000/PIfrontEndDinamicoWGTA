import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  persona: persona = new persona("","","","","","","","","");
  
  constructor(public personaService: PersonaService){}

    ngOnInit(): void{
      this.personaService.getPersona().subscribe(data => (this.persona = data))
        }

/*
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
      }*/
    
    }