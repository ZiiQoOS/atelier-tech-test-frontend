import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlayerDetailsDialog } from '../dialogs/player-details.dialog/player-details.dialog';
import { PlayersService } from '../../services/players-service/players.service';

@Component({
  selector: 'players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  @Input() players: any = [];

  public playerNameSearch: string = '';

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  showPlayerDetails(id: number): void {
    this.dialog.open(PlayerDetailsDialog, {
      width: '100%',
      height: '80%',
      data: { id }
    });
  }
}
