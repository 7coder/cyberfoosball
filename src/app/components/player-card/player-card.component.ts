import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() public type;
  @Input() public params;

  public photoLink: string = '';
  public htmlPopTemplate: string = '';

  constructor() { }

  ngOnInit() {

    // Check photo image of player
    this.photoLink = !!this.params.photo ? '/' + this.params.photo : '/assets/img/no-image.jpg'

    // Generate PopOver template
    this.htmlPopTemplate = '<p>Games Played: <strong>' + this.params.gamesPlayed + '</strong></p>' + 
                            '<p>Goals Scored: <strong>' + this.params.goalsScored + '</strong></p>' + 
                            '<p>Victories: <strong>' + this.params.victories + '</strong></p>'

  }

}
