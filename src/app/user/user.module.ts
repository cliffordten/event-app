import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from "./profile.component";
import { userRoutes } from "./user.routes";
import { LoginComponent } from './login.component';
import { SessionListComponent } from '../events/event-details';

@NgModule({
  imports: [CommonModule, 
    RouterModule.forChild(userRoutes), FormsModule, ReactiveFormsModule],
  declarations: [ProfileComponent, LoginComponent, SessionListComponent],
  providers: []
})
export class UserModule {}
