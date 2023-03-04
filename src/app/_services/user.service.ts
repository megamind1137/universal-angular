import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = "https://universal.up.railway.app/api/v1"

  noAuthHeader = new HttpHeaders(
    { "No-Auth": "True" }
  );

  authHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "
    })
  };

  constructor(private httpClient: HttpClient) { }


  public login(loginData: any) {
    return this.httpClient.post(this.BASE_URL + "/auth", loginData, { headers: this.noAuthHeader });
  }

  public signUp(signUpForm: any) {
    return this.httpClient.post(this.BASE_URL + "/user/save", signUpForm, { headers: this.noAuthHeader });
  }
}
