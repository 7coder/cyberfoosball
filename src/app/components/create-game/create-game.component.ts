import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DataTransmitterService } from '../../services/data-transmitter.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  public model: object = {};
  public playerPhoto: string = '';
  public playerImages: any[] = [];
  public choosenPlayers: object[] = [];

  constructor( private api: ApiService, private dtS: DataTransmitterService) { }

  ngOnInit() {

    this.model['fill'] = 'A';

    // Get Player Images
    this.api.getPhotoPlayers().subscribe( res => this.playerImages = res );

  }

  photoValidate( photo: object ){

    if ( !!photo['photo'] ){
      return photo['photo'];
    }
    return '/assets/img/no-image.jpg';
  }

  invitePlayer(){

    var _c = '';

    if ( this.model['fill'] === 'A' ){
      _c = 'team_a';
    } else {
      _c = 'team_b';
    };

    // Send to Service
    this.dtS.addTolist( _c, this.choosenPlayers );

    // Clear array
    this.choosenPlayers = [];

  }

  selectPlayer( player: object ){
    this.choosenPlayers.push( player );
  }

}
