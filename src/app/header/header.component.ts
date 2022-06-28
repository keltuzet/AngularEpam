import {Component, OnInit} from '@angular/core';
import {AuthService} from "./authentication/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  loginPage: boolean;


  ngOnInit(): void {
    this.authService.getPageStatus()
      .subscribe(status => this.loginPage = status)
  }
}
