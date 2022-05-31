import { Component } from '@angular/core';
import { IPlayer } from './features/players/models/Player.model';
import { IStats } from './features/statistics/models/Stats.model';
import { Observable } from 'rxjs';
import { PlayersService } from './features/players/services/players-service/players.service';
import { StatisticsService } from 'src/app/features/statistics/services/statistics-service/statistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public players$: Observable<{ players: IPlayer[] }> = new Observable();
  public stats$: Observable<{ statistics: IStats[] }> = new Observable();

  constructor(
    private playersService: PlayersService,
    private statisticsService: StatisticsService,
  ) {
  }

  ngOnInit(): void {
    this.players$ = this.playersService.getPlayers();
    this.stats$ = this.statisticsService.fetchStats();
  }
}
