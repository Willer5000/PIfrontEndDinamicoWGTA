//Plan A
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
 constructor(private authService:AuthService, private rutas:Router)
 {}
 canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser = this.authService.UsuarioAutenticado;
    if (route.routeConfig.path === "nuevaexp" || route.routeConfig.path === "editexp") {
      if (currentUser && currentUser.token) {
        return true;
      } else {
        this.rutas.navigate(['/login']);
        return false;
      }
    } else {
      return true;
    }
  }
}

//Plan C
/*import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser = this.authService.UsuarioAutenticado;
    if (currentUser && currentUser.token) {
      return true;
    } else {
      this.router.navigate(['/login']); // this.router.navigate(['/login']);
      return false;
    }
  }
}*/
/*Plan B
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
 constructor(private authService:AuthService, private rutas:Router)
 {}
 canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser = this.authService.UsuarioAutenticado;
    if (route.routeConfig.path === "nuevaexp" || route.routeConfig.path === "editexp") {
      if (currentUser && currentUser.token) {
        return true;
      } else {
        this.rutas.navigate(['/login']);
        return false;
      }
    } else {
      return true;
    }
  }
}
 /*
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser=this.authService.UsuarioAutenticado;
      if (currentUser && currentUser.token)
      {
    return true;
  }
  else{
    //this.rutas.navigate(['/login']);//this.rutas.navigate(['/home']);
    return false;
  }
}
}
*/