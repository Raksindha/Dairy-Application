import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Example: Check if a user is logged in
    const isAuthenticated = !!localStorage.getItem('token'); // Replace with your auth logic

    if (isAuthenticated) {
      return true; // Allow access
    } else {
      // Redirect to login page
      this.router.navigate(['/login']);
      return false; // Deny access
    }
  }
}
