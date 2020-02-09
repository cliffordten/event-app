import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
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
            (click)="handleThumbnailClick(eventData.name)"
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
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    //this.events = this.eventService.getEvents()
    // this.eventService.getEvents().subscribe(events => this.events = events);
    this.events = this.route.snapshot.data["events"];
  }
  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName);
  }
}
