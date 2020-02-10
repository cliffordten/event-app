import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthServices {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: userName.split(" ")[0],
      lastName: userName.split(" ")[1]
    };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
