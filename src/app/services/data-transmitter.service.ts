import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataTransmitterService {

  private teamAPlayers = new BehaviorSubject<any>([]);
  teamA = this.teamAPlayers.asObservable();

  private teamBPlayers = new BehaviorSubject<any>([]);
  teamB = this.teamBPlayers.asObservable();

  constructor() { }

  addTolist( context: string, elements: object[] ){

    if ( context === 'team_a' ){

      this.teamAPlayers.next( elements );

    } else {

      this.teamBPlayers.next( elements );
    }

  }

}
