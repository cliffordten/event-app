import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthServices {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      lastName: "John",
      firsName: "Bell"
    };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
}
