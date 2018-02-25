import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  public players = [];
  public playerCardType = 'short';

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.api.getPlayers().subscribe( res => this.players = res );
  }

}
