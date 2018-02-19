import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class AuthGuard  implements CanActivate {

  constructor( private authService: AuthService  ) { }
  canActivate(router: ActivatedRouteSnapshot,
  state: RouterStateSnapshot)
  {
    return this.authService.isAuthenticated();
  }

}
