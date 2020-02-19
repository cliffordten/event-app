import { Component, OnInit } from "@angular/core";
import { AuthServices } from "../user/auth.services";
import { ISession, EventService } from '../events';

@Component({
  selector: "nav-bar",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  searchValue: string ="";
  foundSessions:ISession[];
  constructor(public auth: AuthServices, private eventService: EventService) {
  
  }

  ngOnInit() {
  }

  searchSessions(searchValue){
    this.eventService.searchSessions(searchValue).subscribe(sessions =>{
      this.foundSessions = sessions;
     })
  } 
}
