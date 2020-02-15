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
  CreateSessionComponent
} from "./events/index";
import { NavComponent } from "./nav/nav.component";
import { ToastrService } from "./common/toastr.service";
import { AppComponent } from "./app.component";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error/404.component";
import { AuthServices } from './user/auth.services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    Error404Component,
    CreateSessionComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule],
  providers: [
    EventService,
    ToastrService,
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
