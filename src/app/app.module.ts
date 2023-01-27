import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { PresentacionComponent } from './component/presentacion/presentacion.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { FooterComponent } from './component/footer/footer.component';
import { ExperienciaComponent } from './component/portfolio/experiencia/experiencia.component';
import { EducacionComponent } from './component/portfolio/educacion/educacion.component';
import { SkillsComponent } from './component/portfolio/skills/skills.component';
import { ProyectosComponent } from './component/portfolio/proyectos/proyectos.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PrePosGradoComponent } from './component/portfolio/educacion/pre-pos-grado/pre-pos-grado.component';
import { CursosComponent } from './component/portfolio/educacion/cursos/cursos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { InterceptorService } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './component/portfolio/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './component/portfolio/experiencia/edit-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentacionComponent,
    PortfolioComponent,
    FooterComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    PrePosGradoComponent,
    CursosComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{  provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

