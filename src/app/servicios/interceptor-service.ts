import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from 'src/app/servicios/auth.service';

@Injectable({
    providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor{
    
    constructor(private authService:AuthService){}
       
        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
            var currentUser=this.authService.UsuarioAutenticado;
            if(currentUser && currentUser.accessToken)
            {
                req=req.clone({
                    setHeaders:{
                        Authorization: `Bearer ${currentUser.accesToken}`
                    }
                })
            }
            console.log("Interceptor está corriendo" + JSON.stringify)
            return next.handle(req);
        
    }
}
