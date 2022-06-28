import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private loginPage: BehaviorSubject<boolean> = new BehaviorSubject(false)

  login(login: string) {

  }

  getPageStatus() {
    return this.loginPage.asObservable()
  }

  updatePageStatus(value: boolean) {
    this.loginPage.next(value)
  }
}
