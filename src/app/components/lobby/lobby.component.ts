import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  public players = [];
  public playerCardType = 'short';

  constructor( private api: ApiService, private router: Router ) { }

  ngOnInit() {
    this.api.getPlayers().subscribe( res => this.players = res );
  }

  createGame(){
    this.router.navigate(['/createGame']);
  }

}
