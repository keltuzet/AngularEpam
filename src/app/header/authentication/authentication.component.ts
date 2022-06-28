import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  email: string;
  password: string

  constructor(public authService: AuthService) { }


  ngOnInit(): void {
    this.authService.updatePageStatus(true)
  }

  ngOnDestroy() {
    this.authService.updatePageStatus(false)
  }

}
