import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean = true;

  constructor(private userService: UserService, private userAuthService: UserAuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    this.loading = false;
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status == 200) {
          this.userAuthService.setJwtToken(response.data.token);
          this.userAuthService.setRole(response.data.userResponseDto.role.name);
          this.loading = true;
          this.router.navigate(["/home"]);
        } else (
          alert(response.message)
        )
      },
      (error) => {
        console.log(error);
        this.loading = true;
        let len = error.error.message.length;
        for (let index = 0; index < len; index++) {
          alert(error.error.message)
        }
      })
  }
}
