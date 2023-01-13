import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from './../../servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /*miHeader:any;

  constructor(private datosPortfolio:PortfolioService) { }


  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data=>{
         console.log(data);

    this.miHeader=data;     
    });
  }*/
  constructor(private router:Router){}
  ngOnInit(): void {;
  }

  login(){
    this.router.navigate(['/login'])
  }
}
