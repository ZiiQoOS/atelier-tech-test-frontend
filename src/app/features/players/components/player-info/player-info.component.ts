import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../../models/Player.model';

@Component({
  selector: 'player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit {

  @Input() player: IPlayer | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
