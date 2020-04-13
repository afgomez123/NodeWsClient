import { Injectable } from "@angular/core";
import { Game, Somer } from "../models/Game";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GamesService {
  API_URI = "http://localhost:3000/api";

  API_URI_SOMER = "http://pruebaweb/base/wS/agenda/info";

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games`, game);
  }
  // **********************************

  saveSomer(somer: Somer) {
    return this.http.post(this.API_URI_SOMER, somer, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      responseType: "text",
      observe: "body",
      params: {
        usuario: somer.usuario,
        est: somer.est,
        crea: somer.crea,
        fecha: somer.fecha,
        host: somer.host
      }
    });
  }

  deleteSomer() {
     var cors_url = "http://localhost:4200";
    console.log("delete...");
    // return this.http.delete(this.API_URI_SOMER);
    return this.http.delete(this.API_URI_SOMER);
  }

  // *****************************************

  updateGame(id: string | number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }
}
