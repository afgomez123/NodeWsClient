import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GamesListComponent } from "./components/games-list/games-list.component";
import { GameFormComponent } from "./components/game-form/game-form.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./components/guards/auth.guards";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/games",
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
  {
    path: "games",
    component: GamesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "games/add",
    component: GameFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "games/edit/:id",
    component: GameFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
