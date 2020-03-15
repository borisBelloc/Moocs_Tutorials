import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authServuice: AuthService,
    private router: Router,
    ) {}

  // Penser a proteger ensutie les routes dans le router
  // + Ajouter dans les provider du module !
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

      // Si l'user est authentifié
      if (this.authServuice.isAuth) {
        return true;
      } else {
        this.router.navigate(['/auth']);
      }
  }

}
