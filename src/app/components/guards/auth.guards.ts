import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  conex = true;
  constructor(private _router: Router) {}

  canActivate(): boolean {
    // If the user is not logged in we'll send them back to the home page

    if (this.conex) {
      return true;
    } else {
      this._router.navigate(["/login"]);
      return false;
    }
  }
}
