import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './_services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'universal-app';

  constructor(private userAuthService: UserAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

}
