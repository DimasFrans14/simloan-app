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
    // Cek apakah pengguna sudah login
    const checkUser = localStorage.getItem('token')
    if (checkUser) {
      return true; // Izinkan navigasi jika pengguna sudah login
    } else {
      // Jika pengguna belum login, redirect ke halaman login
      this.router.navigate(['/login']);
      return false; // Blokir navigasi
    }
  }


}
