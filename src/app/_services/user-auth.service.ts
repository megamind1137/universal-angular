import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRole(role: string) {
    localStorage.setItem("role", role);
  }

  public getRole() {
    return localStorage.getItem("role");
  }

  public setJwtToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getJwtToken() {
    return localStorage.getItem("jwtToken");
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRole() && this.getJwtToken();
  }

}
