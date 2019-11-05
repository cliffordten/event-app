import { Component } from "@angular/core";
import { AuthServices } from "./auth.services";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
  styles: ["em{float:right, color: red, padding-left: 10px}"]
})
export class LoginComponent {
  userName;
  password;
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
