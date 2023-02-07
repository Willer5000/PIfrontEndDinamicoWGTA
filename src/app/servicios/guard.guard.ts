import { Injectable } from '@angular/core';
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
      this.router.navigate(['/home']); // this.router.navigate(['/login']);
      return false;
    }
  }
}

/*import { Injectable } from '@angular/core';
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
      let currentUser=this.authService.UsuarioAutenticado;
      if (currentUser && currentUser.token)
      {
    return true;
  }
  else{
    this.rutas.navigate(['/home']);//this.rutas.navigate(['/login']);
    return false;
  }
}
}
*/