import { Component, Output, EventEmitter } from "@angular/core";
import { ISession, restrictedWords } from '../shared';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: "create-session",
  templateUrl: "./create-session.component.html",
  styles: [`em{float:right; color: #e05c65; padding-left: 10px;} 
  .error input {background-color:#e3c3c5}
  .error :: -webkit input placeholder{color:#999}
  .error :: -moz-placeholder{color:#999}
  .error : -moz-placeholder{color:#999}
  .error : ms-input-placeholder{color:#999}`]
})
export class CreateSessionComponent {
  @Output() saveNewSession = new EventEmitter();
  @Output() changeMode = new EventEmitter();
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
      this.abstract = new FormControl("", [Validators.required, Validators.maxLength(400), restrictedWords(["foo", "bar"])])

      this.newSessionFrom = new FormGroup({
          sessionName: this.name,
          presenter: this.presenter,
          duration: this.duration,
          level: this.level,
          abstract: this.abstract
      })
  }
  saveSession(sessionData){
    let session: ISession = {
      id: undefined,
      name: sessionData.sessionName,
      duration: sessionData.duration,
      level: sessionData.level,
      presenter: sessionData.presenter,
      abstract: sessionData.abstract,
      voters: []
    }
    this.saveNewSession.emit(session);
  }

  cancel(){
    this.changeMode.emit();
  }
}
