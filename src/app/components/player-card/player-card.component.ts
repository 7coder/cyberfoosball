import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() public type;
  @Input() public params;

  constructor() { }

  ngOnInit() {
  }

}
