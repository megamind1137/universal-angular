import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  canActivate(): boolean {

    if (this.userAuthService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"])
      return false;
    }
  }
}
