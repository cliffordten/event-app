import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from './shared';

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-4" *ngFor="let eventData of events">
          <event-thumbnail
            #thumbnail
            [event]="eventData"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventListComponent implements OnInit {
  events: IEvent[];
  constructor(
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    //this.events = this.eventService.getEvents()
    // this.eventService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data["events"];
  }
}
