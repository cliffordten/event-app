import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  CreateEventComponent,
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventListResolver,
  EventRouteActivator
} from "./events/index";
import { NavComponent } from "./nav/nav.component";
import { ToastrService } from "./common/toastr.service";
import { AppComponent } from "./app.component";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error/404.component";
import { AuthServices } from './user/auth.services';

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    Error404Component
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
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
