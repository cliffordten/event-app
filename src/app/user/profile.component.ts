import { Component, OnInit, inject, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthServices } from "./auth.services";
import { Router } from "@angular/router";
import { Toastr, TOASTR_TOKEN } from '../common';

@Component({
  templateUrl: "profile.component.html",
  styles: [`em{float:right; color: #e05c65; padding-left: 10px;} 
  .error input {background-color:#e3c3c5}
  .error :: -webkit input placeholder{color:#999}
  .error :: -moz-placeholder{color:#999}
  .error : -moz-placeholder{color:#999}
  .error : ms-input-placeholder{color:#999}`]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthServices, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr) {

  }
  ngOnInit() {
    let firstName = new FormControl(
      this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z ].*')]
    );
    let lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }
  saveProfile(formValues) {
    
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValues.firstName,
        formValues.lastName
      );
      this.toastr.success("Profile Saved");
      this.router.navigate(["events"]);
    }
  }

  validate(value){
    return value.valid || value.untouched;
  }
  cancel() {
    this.router.navigate(["events"]);
  }
}
