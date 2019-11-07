import { Component } from "@angular/core";
import { AuthServices } from "./auth.services";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
  styles: ["em{float:right; color: #e05c65; padding-left: 10px;}"]
})
export class LoginComponent {
  userName;
  password;
  mouseoverLogin;
  constructor(private authService: AuthServices, private router: Router) {}
  login(formData) {
    this.authService.loginUser(formData.userName, formData.password);
    this.router.navigate(["/events"]);
  }
  cancel() {
    this.router.navigate(["/events"]);
  }
  //   check() {
  //     console.log();
  //   }
}
