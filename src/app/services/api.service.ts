import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private getPlayersUrl = '/assets/data/players.json';

  constructor( private http: HttpClient ) { }

  getPlayers(): Observable<IPlayers[]>{
    return this.http.get<IPlayers[]>( this.getPlayersUrl ).map( data => {
      let players = data['players'];
      return players.map( player => {
        return player;
      })
    });
  }

  getPhotoPlayers(): Observable<IPlayersPhoto[]>{
    return this.http.get( this.getPlayersUrl ).map( data => {
      let players = data['players'];
      return players.map( ( player, index ) => {
        return {
          id : index,
          photo: player['photo'],
          name : player['name']
        }
      })
    });
  }

}


export interface IPlayers {
  name: string,
  level: string,
  victories: number,
  goalsScored: number,
  gamesPlayed: number,
  email: string,
  photo: string
}

export interface IPlayersPhoto{
  id: number,
  photo: string,
  name: string
}
