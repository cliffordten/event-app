import { Error404Component } from "./error/404.component";
import { Routes } from "@angular/router";

import {
  CreateEventComponent,
  EventListComponent,
  EventDetailsComponent,
  EventListResolver,
  EventRouteActivator
} from "./events/index";
export const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["conDeactivateFunction"]
  },
  {
    path: "events",
    component: EventListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "user", loadChildren: "./user/user.module#UserModule" }
];
