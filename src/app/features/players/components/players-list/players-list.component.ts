import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../../models/player-model';
import { IStats } from '../../models/Stats-model';

@Component({
  selector: 'players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  @Input() players: any = [];
  public playerName: string = '';

  constructor() { }

  ngOnInit() {
    console.log("players", this.players);
  }
  showPlayerDetails(id: number) {
    console.log(id);
  }

}
