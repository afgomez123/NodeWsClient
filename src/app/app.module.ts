import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { GamesListComponent } from "./components/games-list/games-list.component";

// Services
import { GamesService } from "./services/games.service";
import { GameFormComponent } from "./components/game-form/game-form.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./components/guards/auth.guards";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesListComponent,
    GameFormComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GamesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
