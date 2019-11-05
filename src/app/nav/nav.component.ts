import { Component, OnInit } from "@angular/core";
import { AuthServices } from "../user/auth.services";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(public auth: AuthServices) {}

  ngOnInit() {
  }
}
