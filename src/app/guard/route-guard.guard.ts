import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let localData: any;
    localData = localStorage.getItem('dataRegister');
    const parseData = JSON.parse(localData);

    if (parseData) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
