import { Component, Input } from "@angular/core";
import { IEvent } from './shared';

@Component({
  selector: "event-thumbnail",
  template: `
    <div [routerLink]="['/events', event?.id]" class="well hoverwell thumbnail">
      <h2>{{ event?.name |uppercase }}</h2>
      <div>Date: {{ event?.date | date:'short' }}</div>
      <div [ngClass]="getTimeClass()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: {{ event?.price | currency:'USD'}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location.address }}</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span>{{ event?.location?.city }}, {{ event?.location?.country }}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">Online URL: {{ event?.onlineUrl }}</div>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        min-height: 210px;
      }
      .well div {
        color: #bbb;
      }
      .green {
        color: #003300 !important;
      }
      .bold {
        font-weight: bold;
      }
    `
  ]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  getTimeClass() {
    // [class.green]="event?.time === '8:00 am'"
    const isEarlyStart = this.event.time === "8:00 am";
    return { green: isEarlyStart, bold: isEarlyStart };
  }
}
