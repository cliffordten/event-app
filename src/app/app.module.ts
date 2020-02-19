import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  CreateEventComponent,
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventListResolver,
  EventRouteActivator,
  CreateSessionComponent,
  SessionListComponent
} from "./events/index";
import { NavComponent } from "./nav/nav.component";
import { TOASTR_TOKEN, Toastr } from "./common/toastr.service";
import { AppComponent } from "./app.component";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error/404.component";
import { AuthServices } from './user/auth.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWell } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pip';

declare let toastr: Toastr;

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent, 
    CollapsibleWell,
    DurationPipe
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
  providers: [
    EventService,
    {provide:TOASTR_TOKEN, useValue: toastr},
    EventListResolver,
    EventRouteActivator,
    AuthServices,
    {
      provide: "conDeactivateFunction",
      useValue: checkSaveState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkSaveState(component: CreateEventComponent) {
  if (component.isSaved) {
    return window.confirm(
      "You have not saved this event, Are you sure you want to cancel?"
    );
  }
  return true;
}
