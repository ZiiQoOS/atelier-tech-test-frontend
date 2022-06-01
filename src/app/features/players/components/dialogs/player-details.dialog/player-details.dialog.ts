import { Component, Inject } from '@angular/core';
import { IPlayer } from '../../../models/Player.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayersService } from '../../../services/players-service/players.service';

@Component({
  selector: 'player-details-dialog',
  templateUrl: './player.details.dialog.html',
  styleUrls: ['./player.details.dialog.scss'],
})

export class PlayerDetailsDialog {

  public player: IPlayer | null = null;
  public loading: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<PlayerDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IPlayer,
    private playerService: PlayersService
  ) {
  }

  ngOnInit() {
    this.playerService.getPlayerById(this.data.id).subscribe((player) => {
      this.player = player;
      this.loading = false;
    });
  }

  closeDialog() {
    this.dialogRef.close()
  }
}