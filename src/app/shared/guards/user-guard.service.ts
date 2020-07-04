import { Injectable } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate{
  constructor(private token: TokenStorageService,
              private router: Router) {
  }

  canActivate(): boolean {
    if (this.token.getToken()) {
      for (const role of this.token.getAuthorities()) {
        if (role === 'ROLE_USER') {
          return true;
        }
      }
      this.router.navigate(['/product']);
      return false;
    } else {
      this.router.navigate(['/product']);
      return false;
    }
  }
}
