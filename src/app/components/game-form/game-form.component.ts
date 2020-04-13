import { Component, OnInit, HostBinding } from "@angular/core";
import { Game, Somer } from "src/app/models/Game";

import { GamesService } from "src/app/services/games.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-game-form",
  templateUrl: "./game-form.component.html",
  styleUrls: ["./game-form.component.css"]
})
export class GameFormComponent implements OnInit {
  @HostBinding("class") clases = "row";

  game: Game = {
    id: 0,
    title: "",
    description: "",
    image: "",
    created_at: new Date()
  };

  somer: Somer = {
    usuario: "12345678",
    est: "1",
    crea: "1036",
    fecha: "2019-09-26",
    host: "Pc andres 758"
  };

  edit: Boolean = false;

  constructor(
    private gameService: GamesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGame(params.id).subscribe(
        res => {
          this.game = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/games"]);
      },
      err => console.error(err)
    );
  }

  saveNewSomer() {
    this.gameService.saveSomer(this.somer).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

  deleteNewSomer() {
    this.gameService.deleteSomer().subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

  updateGame() {
    delete this.game.created_at;
    this.gameService.updateGame(this.game.id, this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/games"]);
      },
      err => console.error(err)
    );
  }
}
