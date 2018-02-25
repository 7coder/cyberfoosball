import { Component, OnInit, Input } from '@angular/core';
import { DataTransmitterService } from '../../services/data-transmitter.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  @Input() public title;
  @Input() public context;

  public players: object[] = [];

  constructor(private dataTransmitter: DataTransmitterService) { }

  ngOnInit() {

    if( this.context === 'team_a' ){
      this.dataTransmitter.teamA.subscribe( res => this.players = res );
    } else {
      this.dataTransmitter.teamB.subscribe( res => this.players = res );
    }

    
  }

}
