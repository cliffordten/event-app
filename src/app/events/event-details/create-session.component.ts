import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from '../shared';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: "./create-session.component.html",
  styles: [
    
  ]
})
export class CreateSessionComponent {
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl
    newSessionFrom: FormGroup
  
  constructor( ) {}

  ngOnInit() {
      this.name = new FormControl("", Validators.required)
      this.presenter = new FormControl("", Validators.required)
      this.duration = new FormControl("", Validators.required)
      this.level = new FormControl("", Validators.required)
      this.abstract = new FormControl("", [Validators.required, Validators.maxLength(400)])

      this.newSessionFrom = new FormGroup({
          name: this.name,
          presenter: this.presenter,
          duration: this.duration,
          level: this.level,
          abstract: this.abstract
      })
  }
}
